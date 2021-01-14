import { Component } from "react";

import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import { connect } from "react-redux";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import { updateCollections, setLoaded } from "../../redux/shop/shop.actions";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const collectionRef = firestore.collection("collections");
		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
			const collections = convertCollectionsSnapshotToMap(snapshot);
			const { updateCollections, setLoaded } = this.props;
			updateCollections(collections);
			setLoaded();
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromSnapshot();
	}

	render() {
		const { match, isLoading } = this.props;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isLoading: state.shop.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionMap) => dispatch(updateCollections(collectionMap)),
	setLoaded: () => dispatch(setLoaded()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

import React from 'react'
import { connect } from 'react-redux'
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import { createStructuredSelector } from "reselect";

import { selectShopCollections } from "../../redux/shop/shop.selector";

export const CollectionsOverview = ({collections}) => {
    return (
        <div className='collections-overview' >
            {collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections,
})

export default connect(mapStateToProps)(CollectionsOverview)

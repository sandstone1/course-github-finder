
import React from 'react';
import SkeletonElement from '../skeleton-element/skeleton-element.component';
import Shimmer from '../shimmer/shimmer.component';

import './skeleton-users.styles.scss';


const SkeletonUsers = () => {

    return (

        <div className="skeleton-wrapper">

            <div className="skeleton-users">

                <SkeletonElement
                    type="avatar"
                />
                <SkeletonElement
                    type="title"
                />
                <SkeletonElement
                    type="thumbnail"
                />

            </div>

            <div className="skeleton-users">

                <SkeletonElement
                    type="avatar"
                />
                <SkeletonElement
                    type="title"
                />
                <SkeletonElement
                    type="thumbnail"
                />

            </div>

            <div className="skeleton-users">

                <SkeletonElement
                    type="avatar"
                />
                <SkeletonElement
                    type="title"
                />
                <SkeletonElement
                    type="thumbnail"
                />

            </div>

            <Shimmer />

        </div>

    );

};

export default SkeletonUsers;

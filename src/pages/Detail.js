import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store/actions';
import { Link, useParams } from "react-router-dom";

const Detail = ({ dispatch, data, loading, error }) => {
    const { id } = useParams();

    const renderPost = () => {
        const post = data.find(post => post.id === parseInt(id));

        if (loading) return <div>Loading post...</div>;
        if (error || !post) return (
            <div className="w-full inline-flex justify-center items-center gap-3">
                <div>Unable to display this post. Try to</div>
                <button
                    className="bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-2"
                    onClick={() => dispatch(fetchData())}
                >
                    Refresh
                </button>
            </div>
        );

        return (
            <div className="p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                <p className="text-lg leading-relaxed">{post.body}</p>
            </div>
        );
    };

    return (
        <div className="container mx-auto px-4">
            <header className="flex items-center justify-between mb-8">
                <h1 className="text-4xl font-bold text-gray-900 text-shadow-lg">
                    Selected Post
                </h1>
                <Link to={'/'} className="bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-2">
                    Back
                </Link>

            </header>
            {renderPost()}
        </div>
    );
}

const mapStateToProps = state => ({
    data: state.data,
    loading: state.loading,
    error: state.error,
});

export default connect(mapStateToProps)(Detail);
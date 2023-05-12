import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store/actions';

const Posts = ({ dispatch, data, loading, hasErrors }) => {
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const renderPosts = () => {
        if (loading) return <div className="loading">Loading posts...</div>;
        if (hasErrors) return <div>Unable to display posts.</div>;

        return data.map(post => (
            <div key={post.id} className="post p-6 bg-white rounded-lg shadow-md transform hover:-translate-y-1 transition duration-300 ease-out">
                <h2 className="post-title text-2xl font-bold mb-4">{post.title}</h2>
                <p className="post-body text-lg leading-relaxed">{post.body}</p>
            </div>
        ));
    };

    return (
        <div className="container mx-auto px-4">
            <header className="header flex items-center justify-between mb-8">
                <h1 className="title text-4xl font-bold text-gray-900 text-shadow-lg">
                    Latest Posts
                </h1>
                <button
                    className="refresh bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-2"
                    onClick={() => dispatch(fetchData())}
                >
                    Refresh
                </button>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {renderPosts()}
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    data: state.data,
    loading: state.loading,
    hasErrors: state.hasErrors,
});

export default connect(mapStateToProps)(Posts);

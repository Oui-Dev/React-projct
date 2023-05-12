import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store/actions';
import { Link } from "react-router-dom";

const List = ({ dispatch, data, loading, error }) => {
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const renderPosts = () => {
        if (loading) return <div>Loading posts...</div>;
        if (error) return <div>Unable to display posts.</div>;

        return data.map(post => (
            <Link
                to={'/' + post.id} key={post.id}
                className="p-6 bg-white rounded-lg shadow-md transform hover:-translate-y-1 hover:bg-gray-100 transition duration-300 ease-out"
            >
                <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                <p className="text-lg leading-relaxed">{post.body}</p>
            </Link>
        ));
    };

    return (
        <div className="container mx-auto px-4">
            <header className="flex items-center justify-between mb-8">
                <h1 className="text-4xl font-bold text-gray-900 text-shadow-lg">
                    Latest Posts
                </h1>
                <button
                    className="bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-2"
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
    error: state.error,
});

export default connect(mapStateToProps)(List);

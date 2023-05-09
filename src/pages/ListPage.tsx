import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import LoadingSpinner from "../components/LoadingSpinner";

const ListPage = () => {
  return (
    <div>
      <div className="">
        <h1>Blogs</h1>
        <div>
          <Link to="/blogs/create" className="">
            Create New
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
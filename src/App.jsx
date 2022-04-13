import React from "react";
import { useState, useEffect, useCallback } from "react";
import API from "./api";
import ShowPosts from "./components/ShowPosts";
import CreatePost from "./components/CreatePost";

const initialState = {
  results: [],
};

function App() {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchPosts = async () => {
    try {
      setError(false);
      setLoading(true);

      const posts = await API.fetchPosts();

      setState((prev) => ({
        results: [...posts],
        // results: state.page > 1 ? [...prev.results, ...posts] : [...posts],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    setState(initialState);
    fetchPosts();
  }, []);

  return (
    <div className="content_wrapper">
      <CreatePost setState={setState} state={state} />
      <ShowPosts
        state={state}
        setModalOpened={setModalOpened}
        modalOpened={modalOpened}
        setState={setState}
      />
    </div>
  );
}

export default App;

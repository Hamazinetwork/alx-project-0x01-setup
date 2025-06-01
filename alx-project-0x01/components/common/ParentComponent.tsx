import React, { useState } from 'react';
import PostModal from './PostModal'; // Adjust the import path as necessary

function ParentComponent() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddPost = (postData) => {
    // Logic to handle the submitted post data
    // For example, updating state or making an API call
  };

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Add Post</button>
      {isModalOpen && (
        <PostModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      )}
    </div>
  );
}

export default ParentComponent;

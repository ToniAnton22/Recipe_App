function Comments() {
  return (
    <div className="max-w-lg shadow-md">
      <form action="" className="w-full p-4">
        <div className="mb-2">
          <label className="text-lg text-gray-600">Add a comment</label>
          <textarea
            className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
            name="comment"
            placeholder=""
          ></textarea>
        </div>
        <button className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">
          Comment
        </button>
      </form>
    </div>
  );
}

export default Comments();

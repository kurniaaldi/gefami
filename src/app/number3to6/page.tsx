"use client";

import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  // 3. Fetch data from API
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: Post[]) => setPosts(data.slice(0, 10)))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  // 5. Delete a row
  const deleteRow = (id: number): void => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  // 6. Remove a key from JSON
  const modifiedPosts = posts.map(({ id, title }) => ({ id, title }));

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {modifiedPosts.map((post) => (
                  <tr key={post.id} className="odd:bg-white even:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                      {post.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                      {post.title}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                      <button
                        onClick={() => deleteRow(post.id)}
                        type="button"
                        className="inline-flex items-center cursor-pointer gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 focus:outline-hidden focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

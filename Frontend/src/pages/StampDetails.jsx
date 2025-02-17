import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function StampDetails({ stamps }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const stamp = stamps.find((s) => s.id === parseInt(id, 10));
  const verifiedIcon =
    "https://cdn0.iconfinder.com/data/icons/simplie-essential-action/22/action_039-checkmark-check-done-verify-1024.png";
  const pendingIcon =
    "https://e7.pngegg.com/pngimages/638/44/png-clipart-exclamation-mark-interjection-exclamation-mark-miscellaneous-text.png";

  if (!stamp) {
    return <div>Stamp not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 via-white to-orange-500 flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mt-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {stamp.info}
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Date of Production: </strong> {stamp.date || "N/A"}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Value: </strong>
              {stamp.value || "N/A"}
            </p>
            <p className="text-lg text-gray-800 mb-2">
              <strong>Verification: </strong>
              {stamp.verification || "N/A"}
              {stamp.verification === "Verified" && (
                <img
                  src={verifiedIcon}
                  alt="Verified"
                  className="inline-block ml-2 w-4 h-4"
                />
              )}
              {stamp.verification === "Pending" && (
                <img
                  src={pendingIcon}
                  alt="Pending"
                  className="inline-block ml-2 w-4 h-4"
                />
              )}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Owners: </strong>
              {stamp.owner || "N/A"}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Part of Collection: </strong>
              {stamp.collection || "N/A"}
            </p>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={stamp.image || "N/A"}
              alt={stamp.info || "N/A"}
              className="w-full h-auto max-w-xs rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Story</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {stamp.story || "N/A"}
          </p>
        </div>

        <button
          onClick={() => navigate("/library")}
          className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate("/")}
          className="mx-4 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default StampDetails;

import React from "react";

const FeatureCard = ({ title, icon: Icon, desc, subTitle }) => {
  return (
    <div className="max-w-64 bg-white p-6 rounded-sm shadow w-full capitalize text-center">
      <Icon size={50} className="mb-5 text-fuchsia-500 mx-auto" />
      <div>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-fuchsia-500">
          {title}
        </h5>
      </div>

      {desc && (
        <p className="mb-3 font-normal text-gray-500">
          {desc}
        </p>
      )}

      {Array.isArray(subTitle) &&
        subTitle.map((sub, i) => (
          <p key={i} className="mb-3 font-normal text-gray-500">
            {sub}
          </p>
        ))}
    </div>
  );
};

export default FeatureCard;

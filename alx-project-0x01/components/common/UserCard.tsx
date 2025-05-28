import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-lg border border-gray-200 transition-transform transform hover:scale-105">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xl font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500">@{username}</p>
        </div>
      </div>

      <div className="text-gray-700 text-sm space-y-2">
        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
            {email}
          </a>
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <a href={`tel:${phone}`} className="text-blue-600 hover:underline">
            {phone}
          </a>
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {website}
          </a>
        </p>
      </div>

      <div className="mt-4 text-gray-600 text-sm">
        <p>
          <strong>Address:</strong> {address.suite}, {address.street},{" "}
          {address.city}, {address.zipcode}
        </p>
        <p>
          <strong>Company:</strong> {company.name} —{" "}
          <em>{company.catchPhrase}</em>
        </p>
      </div>

      <div className="mt-4 text-xs text-gray-400 text-right">User ID: {id}</div>
    </div>
  );
};

export default UserCard;

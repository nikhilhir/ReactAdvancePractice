import React from "react";

const ProfileDataRow = ({ profile }) => {
  // DO NOT DELETE the data-cy attributes. Removing them may result in less evaluation marks

  return (
    <tr data-cy={`profile-wrapper-${profile.id}`}>
      <td data-cy="profile-id">{profile.id}</td>
      <td data-cy="profile-image">
        <img style={{borderRadius:"5px", width:"150px"}} src={profile.profile_pic}
        alt={profile.first_name}/>
      </td>
      <td data-cy="profile-first-name">{profile.first_name}</td>
      <td data-cy="profile-last-name">{profile.last_name}</td>
      <td data-cy="profile-email">{profile.email}</td>
      <td data-cy="profile-gender">{profile.gender}</td>
      <td data-cy="profile-country">{profile.country}</td>
    </tr>
  );
};

export default ProfileDataRow;

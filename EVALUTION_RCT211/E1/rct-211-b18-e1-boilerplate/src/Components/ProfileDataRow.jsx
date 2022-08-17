import React from "react";

const ProfileDataRow = ({ profile }) => {
  // DO NOT DELETE the data-cy attributes. Removing them may result in less evaluation marks

  return (
    <tr data-cy={`profile-wrapper-${profile.id}`}>
      <td data-cy="profile-id"></td>
      <td data-cy="profile-image"></td>
      <td data-cy="profile-first-name"></td>
      <td data-cy="profile-last-name"></td>
      <td data-cy="profile-email"></td>
      <td data-cy="profile-gender"></td>
      <td data-cy="profile-country"></td>
    </tr>
  );
};

export default ProfileDataRow;

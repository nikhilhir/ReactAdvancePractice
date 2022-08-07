import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMusicRecords } from "../Redux/AppReducer/action";

const useCustomHook = (id) => {
  const dispatch = useDispatch();
  const musicRecords = useSelector((store) => store.AppReducer.musicRecords);
  const [currentMusicAlbum, setCurrentMusicAlbum] = useState({});
  useEffect(() => {
    if (musicRecords.length === 0) {
      dispatch(getMusicRecords());
    }
  }, [dispatch, musicRecords.length]);

  useEffect(() => {
    if (id) {
      //filter the album based on the id
      const currentMusic = musicRecords.find((album) => album.id === id);

      currentMusic && setCurrentMusicAlbum(currentMusic);
    }
  }, [id, musicRecords]);
  return { currentMusicAlbum };
};

export default useCustomHook;

import React, { useEffect } from 'react';
import { nguoiDungServ } from '../../services/nguoiDungServices';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../../redux/slices/nguoiDungSlice';

const UserManagement = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.nguoiDung);

  useEffect(() => {
    // nguoiDungServ
    //   .getAllUser()
    //   .then((res) => {
    //     console.log(res);
    //     // mình bắn dữ liệu lên store
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    dispatch(getAllUser());
  }, []);

  console.log(users);

  // một hàm vừa gọi dữ liệu và vừa bắn dữ liệu lên redux
  // redux không cho phép gọi bất đồng bộ bên trên reducer
  // redux-thunk là một middleware cho phép xử lí trước khi dispatch tới store
  // redux-saga

  return <div>UserManagement</div>;
};

export default UserManagement;
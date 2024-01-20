import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

/**
 * EditDoctor component is responsible for rendering a form to edit or add a doctor.
 * It allows the user to input various details such as name, specialization, address, etc.
 * The component uses state to manage the form data and makes API calls to update or add a doctor.
 *
 * @returns {JSX.Element} The rendered EditDoctor component.
 */

export default function EditDoctor() {
  const [doctor, setDoctor] = useState({
    photos: "",
    trangThaiHoatDong: "",
    tenBacSi: "",
    diaChi: "",
    ngaySinh: "",
    trinhDo: "",
    chuyenKhoa: "",
    email: "",
    gioiTinh: "",
    soDienThoai: "",
    ghiChu: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const {
    photos,
    trangThaiHoatDong,
    tenBacSi,
    diaChi,
    ngaySinh,
    trinhDo,
    chuyenKhoa,
    email,
    gioiTinh,
    soDienThoai,
    ghiChu,
  } = doctor;
  const onChange = (e) => {
    e.preventDefault();
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value,
    });
    formData.set(e.target.name, e.target.value);
  };
  const handleFileChange = (e) => {
    setDoctor({
      ...doctor,
      photos: e.target.files[0],
    });
  };
  const formData = new FormData();
  formData.append("file", doctor.photos);
  formData.append("trangThaiHoatDong", doctor.trangThaiHoatDong);
  formData.append("tenBacSi", doctor.tenBacSi);
  formData.append("diaChi", doctor.diaChi);
  formData.append("ngaySinh", doctor.ngaySinh);
  formData.append("trinhDo", doctor.trinhDo);
  formData.append("chuyenKhoa", doctor.chuyenKhoa);
  formData.append("email", doctor.email);
  formData.append("gioiTinh", doctor.gioiTinh);
  formData.append("soDienThoai", doctor.soDienThoai);
  formData.append("ghiChu", doctor.ghiChu);

  useEffect(() => {
    const loadDoctor = async () => {
      const result = await axios.get(`http://localhost:8080/api/bacsi/${id}`, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      setDoctor(result.data);
    };
    loadDoctor();
  }, [id]);

  const handlEditDoctor = async () => {
    try {
      if (id) {
        // Update existing doctor

        await axios.put(`http://localhost:8080/api/bacsi/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        });
        navigate("/doctor");
        toast.success("Cập nhật bác sĩ thành công");
      } else {
        // Add new doctor
        await axios.post(`http://localhost:8080/api/bacsi`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        });
      }
      setDoctor({
        photos: "",
        trangThaiHoatDong: "",
        tenBacSi: "",
        diaChi: "",
        ngaySinh: "",
        trinhDo: "",
        chuyenKhoa: "",
        email: "",
        gioiTinh: "",
        soDienThoai: "",
        ghiChu: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h4 className="page-title">Thêm Bác Sĩ</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <form
                  onSubmit={(e) => handlEditDoctor(e)}
                  encType="multipart/form-data"
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>
                          Tên bác sĩ <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={tenBacSi}
                          onChange={(e) => onChange(e)}
                          name="tenBacSi"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>
                          Chuyên khoa <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          value={chuyenKhoa}
                          onChange={(e) => onChange(e)}
                          name="chuyenKhoa"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>
                          Ghi Chú <span className="text-danger">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          onChange={(e) => onChange(e)}
                          name="ghiChu"
                          value={ghiChu}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>
                          Trình độ <span className="text-danger">*</span>
                        </label>
                        <input
                          onChange={(e) => onChange(e)}
                          value={trinhDo}
                          name="trinhDo"
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          onChange={(e) => onChange(e)}
                          value={email}
                          name="email"
                          className="form-control"
                          type="email"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Ngày Sinh</label>
                        <div>
                          <input
                            name="ngaySinh"
                            type="date"
                            onChange={(e) => onChange(e)}
                            className="form-control"
                            value={ngaySinh.substring(0, 10)} // Fix: Update the value to be in the format "yyyy-MM-dd"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group gender-select">
                        <label className="gen-label">Giới Tính</label>
                        <div className="form-check-inline">
                          <label className="form-check-label">
                            <input
                              type="radio"
                              name="gioiTinh"
                              onChange={(e) => onChange(e)}
                              className="form-check-input"
                              value={gioiTinh}
                            />
                            Nam
                          </label>
                        </div>
                        <div className="form-check-inline">
                          <label className="form-check-label">
                            <input
                              onChange={(e) => onChange(e)}
                              type="radio"
                              name="gioiTinh"
                              className="form-check-input"
                              value={gioiTinh}
                            />
                            Nữ
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <label>Địa chỉ</label>
                            <input
                              onChange={(e) => onChange(e)}
                              value={diaChi}
                              name="diaChi"
                              type="text"
                              className="form-control "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Số điện thoại </label>
                        <input
                          onChange={(e) => onChange(e)}
                          value={soDienThoai}
                          name="soDienThoai"
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label>Ảnh đại diện</label>
                        <div className="profile-upload">
                          <div className="upload-img">
                            <img
                              alt=""
                              src={`data:image/jpeg;base64,${doctor.photos}`}
                            />
                          </div>
                          <div className="upload-input">
                            <input
                              type="file"
                              name="file"
                              onChange={(e) => handleFileChange(e)}
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="display-block">Trạng thái</label>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="trangThaiHoatDong"
                        onChange={(e) => onChange(e)}
                        value={trangThaiHoatDong}
                        id="doctor_active"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="doctor_active"
                      >
                        Hoạt động
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="trangThaiHoatDong"
                        onChange={(e) => onChange(e)}
                        value={trangThaiHoatDong}
                        id="doctor_inactive"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="doctor_inactive"
                      >
                        Không hoạt động
                      </label>
                    </div>
                  </div>
                  <div className="m-t-20 text-center">
                    <button
                      type="sumbit"
                      className="btn btn-secondary submit-btn"
                    >
                      Cập nhật bác sĩ
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function Doctor() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    loadDoctors();
  }, []);

  const loadDoctors = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/bacsi", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      setDoctors(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  /**
   * Renders a list of doctors with their information.
   * @returns {JSX.Element} The Doctor component.
   */

  const handleDelete = async (maBacsi) => {
    try {
      await axios.delete(`http://localhost:8080/api/bacsi/${maBacsi}`, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      toast.success("Xóa bác sĩ thành công");
      loadDoctors();
    } catch (err) {
      toast.error("Xóa bác sĩ thất bại");
      console.log(err);
    }
  };

  return (
    <div>
      <>
        <div className="main-wrapper">
          <div className="page-wrapper">
            <div className="content">
              <div className="row">
                <div className="col-sm-4 col-3">
                  <h4 className="page-title">Bác Sĩ</h4>
                </div>
                <div className="col-sm-8 col-9 text-right m-b-20">
                  <a
                    href="/add-doctor"
                    className="btn btn-dark btn-rounded float-right "
                  >
                    <i className="fa fa-plus" /> Thêm bác sĩ
                  </a>
                </div>
              </div>
              <div className="row doctor-grid">
                {doctors.map((doctor) => (
                  <div
                    className="col-md-4 col-sm-4  col-lg-3"
                    key={doctor.maBacSi}
                  >
                    <div className="profile-widget">
                      <div className="doctor-img">
                        <a className="avatar" href="profile.html">
                          <img
                            alt=""
                            src={`data:image/jpeg;base64,${doctor.photos}`}
                          />
                        </a>
                      </div>
                      <div className="dropdown profile-action">
                        <a
                          href="#"
                          className="action-icon dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-ellipsis-v" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <Link
                            className="dropdown-item"
                            data-toggle="modal"
                            data-target="#edit_patient"
                            to={`/edit-doctor/${doctor.maBacSi}`}
                          >
                            <i className="fa fa-pencil m-r-5"></i>Edit
                          </Link>

                          <button
                            className="dropdown-item"
                            data-toggle="modal"
                            data-target="#deleteDoctorModal"
                            onClick={() => handleDelete(doctor.maBacSi)}
                          >
                            <i className="fa fa-trash-o m-r-5"></i>Delete
                          </button>
                        </div>
                      </div>

                      <h4 className="doctor-name text-ellipsis">
                        <a href="profile.html">{doctor.tenBacSi}</a>
                      </h4>
                      <div className="doc-prof">{doctor.chuyenKhoa}</div>
                      <div className="user-country">
                        <i className="fa fa-map-marker" /> {doctor.diaChi}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-overlay" data-reff="" />
      </>
    </div>
  );
}

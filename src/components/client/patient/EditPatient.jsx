import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditPatient() {
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    hoVaTen: "",
    tuoi: "",
    gioiTinh: "",
    diaChi: "",
    soDienThoai: "",
    tinhTrangSucKhoe: "",
  });
  const { hoVaTen, tuoi, gioiTinh, diaChi, soDienThoai, tinhTrangSucKhoe } =
    patient;

  const { id } = useParams();
  useEffect(() => {
    const loadPatients = async () => {
      const result = await axios.get(
        `http://localhost:8080/api/benhnhan/${id}`,
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      );
      setPatient(result.data);
    };
    loadPatients();
  }, [id]);
  const onChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/benhnhan/${id}`, patient, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      setPatient({
        hoVaTen: "",
        tuoi: "",
        gioiTinh: "",
        diaChi: "",
        soDienThoai: "",
        tinhTrangSucKhoe: "",
      });
      toast.success("Cập nhật bệnh nhân thành công");
      navigate("/patient");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {" "}
      <>
        <div className="main-wrapper">
          <div className="page-wrapper">
            <div className="content">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <h4 className="page-title">Cập nhật bệnh nhân</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>
                            Họ và tên <span className="text-danger">*</span>
                          </label>
                          <input
                            value={hoVaTen}
                            onChange={(e) => onChange(e)}
                            name="hoVaTen"
                            className="form-control"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>
                            Tuổi <span className="text-danger">*</span>
                          </label>
                          <input
                            name="tuoi"
                            value={tuoi}
                            onChange={(e) => onChange(e)}
                            className="form-control"
                            type="number"
                          />
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
                                className="form-check-input"
                                onChange={(e) => onChange(e)}
                                value="N"
                              />
                              Nam
                            </label>
                          </div>
                          <div className="form-check-inline">
                            <label className="form-check-label">
                              <input
                                type="radio"
                                name="gioiTinh"
                                className="form-check-input"
                                onChange={(e) => onChange(e)}
                                value="F"
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
                              <label>Địa Chỉ</label>
                              <input
                                type="text"
                                className="form-control "
                                name="diaChi"
                                value={diaChi}
                                onChange={(e) => onChange(e)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Số điện thoại </label>
                          <input
                            className="form-control"
                            type="number"
                            name="soDienThoai"
                            value={soDienThoai}
                            onChange={(e) => onChange(e)}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>
                            Tình Trạng sức khỏe{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="tinhTrangSucKhoe"
                            value={tinhTrangSucKhoe}
                            onChange={(e) => onChange(e)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="m-t-20 text-center">
                      <button type="sumbit" className="btn btn-secondary ">
                        Create Patient
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-overlay" data-reff="" />
      </>
    </div>
  );
}

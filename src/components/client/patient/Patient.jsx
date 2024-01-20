import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function Patient() {
  const [patients, setPatients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [patientsPerPage] = useState(5);
  const numberOfPages = Math.ceil(patients.length / patientsPerPage);
  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = patients.slice(
    indexOfFirstPatient,
    indexOfLastPatient
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    loadPatients();
  }, []);
  const loadPatients = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/benhnhan", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      setPatients(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async (maBenhNhan) => {
    try {
      await axios.delete(`http://localhost:8080/api/benhnhan/${maBenhNhan}`, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      toast.success("Xóa bệnh nhân thành công");
      loadPatients();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content">
            <div className="row">
              <div className="col-sm-4 col-3">
                <h4 className="page-title">Bệnh nhân</h4>
              </div>
              <div className="col-sm-8 col-9 text-right m-b-20">
                <a
                  href="/addpatient"
                  className="btn btn btn-dark btn-rounded float-right"
                >
                  <i className="fa fa-plus" /> Thêm bệnh nhân
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-border table-striped custom-table  mb-0">
                    <thead>
                      <tr>
                        <th>Họ và tên</th>
                        <th>Tuổi</th>
                        <th>Giới Tính</th>
                        <th>Địa Chỉ</th>
                        <th>Số Điện Thoại</th>
                        <th>Tình trạng sức khỏe</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentPatients.map((patient) => (
                        <tr key={patient.maBenhNhan}>
                          <td>{patient.hoVaTen}</td>
                          <td>{patient.tuoi}</td>
                          <td>{patient.gioiTinh === "F" ? "Nữ" : "Nam"}</td>
                          <td>{patient.diaChi}</td>
                          <td>{patient.soDienThoai}</td>
                          <td>{patient.tinhTrangSucKhoe}</td>
                          <td className="text-right">
                            <div className="dropdown dropdown-action">
                              <a
                                href="#"
                                className="action-icon dropdown-toggle"
                                data-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="fa fa-ellipsis-v"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                <Link
                                  className="dropdown-item"
                                  data-toggle="modal"
                                  data-target="#edit_patient"
                                  to={`/editpatient/${patient.maBenhNhan}`}
                                >
                                  <i className="fa fa-pencil m-r-5"></i>Edit
                                </Link>

                                <button
                                  className="dropdown-item"
                                  data-toggle="modal"
                                  data-target="#delete_patient"
                                  onClick={() =>
                                    handleDelete(patient.maBenhNhan)
                                  }
                                >
                                  <i className="fa fa-trash-o m-r-5"></i>Delete
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Pagination component */}
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end">
                <li
                  className={
                    "page-item " + (currentPage === 1 ? "disabled" : "")
                  }
                >
                  <a
                    className="page-link"
                    onClick={() => paginate(currentPage - 1)}
                    style={{ cursor: "pointer" }}
                  >
                    Lùi
                  </a>
                </li>
                {Array.from({ length: numberOfPages }).map((item, index) => (
                  <li
                    key={index}
                    className={
                      "page-item " + (index + 1 === currentPage ? "active" : "")
                    }
                  >
                    <a
                      className="page-link"
                      onClick={() => paginate(index + 1)}
                      style={{ cursor: "pointer" }}
                    >
                      {index + 1}
                    </a>
                  </li>
                ))}
                <li
                  className={
                    "page-item " +
                    (currentPage === numberOfPages ? "disabled" : "")
                  }
                >
                  <a
                    className="page-link"
                    onClick={() => paginate(currentPage + 1)}
                    style={{ cursor: "pointer" }}
                  >
                    Tới
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="sidebar-overlay" data-reff=""></div>
    </div>
  );
}

import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">Main</li>
            <li className="active">
              <a href="/home">
                <i className="fa fa-dashboard" /> <span>Trang Chủ</span>
              </a>
            </li>
            <li>
              <a href="/doctor">
                <i className="fa fa-user-md" /> <span>Bác Sĩ</span>
              </a>
            </li>
            <li>
              <a href="/patient">
                <i className="fa fa-wheelchair" /> <span>Bệnh Nhân</span>
              </a>
            </li>
            <li>
              <a href="appointments.html">
                <i className="fa fa-calendar" /> <span>Appointments</span>
              </a>
            </li>
            <li>
              <a href="schedule.html">
                <i className="fa fa-calendar-check-o" />
                <span>Doctor Schedule</span>
              </a>
            </li>
            <li>
              <a href="departments.html">
                <i className="fa fa-hospital-o" /> <span>Departments</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="fa fa-user" /> <span> Employees </span>
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="employees.html">Employees List</a>
                </li>
                <li>
                  <a href="leaves.html">Leaves</a>
                </li>
                <li>
                  <a href="holidays.html">Holidays</a>
                </li>
                <li>
                  <a href="attendance.html">Attendance</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="fa fa-money" /> <span> Accounts </span>
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="invoices.html">Invoices</a>
                </li>
                <li>
                  <a href="payments.html">Payments</a>
                </li>
                <li>
                  <a href="expenses.html">Expenses</a>
                </li>
                <li>
                  <a href="taxes.html">Taxes</a>
                </li>
                <li>
                  <a href="provident-fund.html">Provident Fund</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="fa fa-book" /> <span> Payroll </span>
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="salary.html"> Employee Salary </a>
                </li>
                <li>
                  <a href="salary-view.html"> Payslip </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="chat.html">
                <i className="fa fa-comments" /> <span>Chat</span>
                <span className="badge badge-pill bg-primary float-right">
                  5
                </span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="fa fa-video-camera camera" />
                <span> Calls</span> <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="voice-call.html">Voice Call</a>
                </li>
                <li>
                  <a href="video-call.html">Video Call</a>
                </li>
                <li>
                  <a href="incoming-call.html">Incoming Call</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="fa fa-envelope" /> <span> Email</span>
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="compose.html">Compose Mail</a>
                </li>
                <li>
                  <a href="inbox.html">Inbox</a>
                </li>
                <li>
                  <a href="mail-view.html">Mail View</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="fa fa-commenting-o" /> <span> Blog</span>
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="blog-details.html">Blog View</a>
                </li>
                <li>
                  <a href="add-blog.html">Add Blog</a>
                </li>
                <li>
                  <a href="edit-blog.html">Edit Blog</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="assets.html">
                <i className="fa fa-cube" /> <span>Assets</span>
              </a>
            </li>
            <li>
              <a href="activities.html">
                <i className="fa fa-bell-o" /> <span>Activities</span>
              </a>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="fa fa-flag-o" /> <span> Reports </span>
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="expense-reports.html"> Expense Report </a>
                </li>
                <li>
                  <a href="invoice-reports.html"> Invoice Report </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="settings.html">
                <i className="fa fa-cog" /> <span>Settings</span>
              </a>
            </li>
            <li className="menu-title">UI Elements</li>
            <li className="submenu">
              <a href="#">
                <i className="fa fa-laptop" /> <span> Components</span>
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="uikit.html">UI Kit</a>
                </li>
                <li>
                  <a href="typography.html">Typography</a>
                </li>
                <li>
                  <a href="tabs.html">Tabs</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="fa fa-edit" /> <span> Forms</span>
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="form-basic-inputs.html">Basic Inputs</a>
                </li>
                <li>
                  <a href="form-input-groups.html">Input Groups</a>
                </li>
                <li>
                  <a href="form-horizontal.html">Horizontal Form</a>
                </li>
                <li>
                  <a href="form-vertical.html">Vertical Form</a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="#">
                <i className="fa fa-table" /> <span> Tables</span>
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="tables-basic.html">Basic Tables</a>
                </li>
                <li>
                  <a href="tables-datatables.html">Data Table</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="calendar.html">
                <i className="fa fa-calendar" /> <span>Calendar</span>
              </a>
            </li>
            <li className="menu-title">Extras</li>
            <li className="submenu">
              <a href="#">
                <i className="fa fa-columns" /> <span>Pages</span>
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="login.html"> Login </a>
                </li>
                <li>
                  <a href="register.html"> Register </a>
                </li>
                <li>
                  <a href="forgot-password.html"> Forgot Password </a>
                </li>
                <li>
                  <a href="change-password2.html"> Change Password </a>
                </li>
                <li>
                  <a href="lock-screen.html"> Lock Screen </a>
                </li>
                <li>
                  <a href="profile.html"> Profile </a>
                </li>
                <li>
                  <a href="gallery.html"> Gallery </a>
                </li>
                <li>
                  <a href="error-404.html">404 Error </a>
                </li>
                <li>
                  <a href="error-500.html">500 Error </a>
                </li>
                <li>
                  <a href="blank-page.html"> Blank Page </a>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <a href="javascript:void(0);">
                <i className="fa fa-share-alt" /> <span>Multi Level</span>
                <span className="menu-arrow" />
              </a>
              <ul style={{ display: "none" }}>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <span>Level 1</span> <span className="menu-arrow" />
                  </a>
                  <ul style={{ display: "none" }}>
                    <li>
                      <a href="javascript:void(0);">
                        <span>Level 2</span>
                      </a>
                    </li>
                    <li className="submenu">
                      <a href="javascript:void(0);">
                        <span> Level 2</span> <span className="menu-arrow" />
                      </a>
                      <ul style={{ display: "none" }}>
                        <li>
                          <a href="javascript:void(0);">Level 3</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Level 3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <span>Level 2</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <span>Level 1</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar.js";
import Footer from "./Footer";
import MoEYS from "../logo/MoEYS.png";

function Detail() {
    // Get params
    const { uid } = useParams();

    // Get Universities
    const [isLoading, setIsLoading] = useState(true);
    const [university, setUniversity] = useState();

    const getUniversities = () => {
        fetch("http://13.213.62.43:3333/api/universities/" + id, {})
            .then((res) => res.json())
            .then((res) => {
                setUniversity(res.data);
                setIsLoading(false);
                // document.getElementsByClassName('page-number')[currentPage-1].classList.add("active");
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getUniversities();
    }, []);


    const [content, setContent] = useState('program');
    const [facultyId, setFacultyId] = useState(null);
    const [departmentId, setDepartmentId] = useState(null);

    function changePage(event) {
        setContent(event.currentTarget.getAttribute("data-content"));
    }

    function gotoCurriculum(event) {
        setFacultyId(parseInt(event.currentTarget.getAttribute("data-faculty")));
        setDepartmentId(parseInt(event.currentTarget.getAttribute("data-department")));
        setContent("curriculum");
    }

    const element = () => {
        if (content === 'program') return (
            <div className="content-container">
                {university.faculties.map((faculty, i) => {
                    return (
                        <div className="card">
                            <div className="detail">
                                <h1>{faculty.km}</h1>
                                <ul id="department">
                                    {faculty.departments
                                        ? faculty.departments.map((department, j) => {
                                            return <li data-faculty={i} data-department={j} onClick={gotoCurriculum}>{department.km}</li>;
                                        })
                                        : console.log(false)}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        ); else if (content === 'curriculum') {
            if (facultyId !== null) {
                if (university.faculties[facultyId].departments[departmentId].majors) return (
                    <div className="content-container-cur">
                        {university.faculties[facultyId].departments[departmentId].majors[0].years.map((year, index) => {
                            return (
                                <div className="card-cur">
                                    <div className="detail-cur">
                                        <h1>ឆ្នាំទី {index+1}</h1>
                                        <div className="name-fee">
                                            <p>{university.faculties[facultyId].departments[departmentId].km}</p>
                                            <p>តម្លៃសិក្សា: ${year.fee}</p>
                                        </div>
                                        <div className="container-sermester">
                                            {year.semesters.map((semester, index) => {
                                                return (
                                                    <>
                                                        <div className="sermester-one">
                                                            <h2>ឆមាសទី {index+1}</h2>
                                                            <div className="subject">
                                                                <h3>មុខវិជ្ជា</h3>
                                                                <ul>
                                                                    {semester.subjects.map((subject) => {
                                                                        return <li>{subject.km}</li>
                                                                    })}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ); else return (
                    <div className="notyet-data">ទិន្នន័យនឹងធ្វើការដាក់បញ្ចូលនៅពេលក្រោយ</div>
                );
            } else return (
                <div>Not yet click department</div>
            )
        } else if (content === 'contact') return (
            <div className="wrapper-location content" id="location">
                <div className="contact">
                    <div className="phone-number">
                        <div className="icon-num">
                            <i className="fa-solid fa-phone-volume"></i>
                            <h1>លេខទូរស័ព្ច</h1>
                        </div>
                        <p>{university.phone_numbers}</p>
                    </div>
                    <div className="email-container">
                        <div className="email">
                            <i className="fa-solid fa-envelope"></i>
                            <h1>អ៊ីមែល</h1>
                        </div>
                        <p>{university.email}</p>
                    </div>
                    <div className="website-link">
                        <div className="website">
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            <h1>វេបសាយ</h1>
                        </div>
                        <p>
                            <a target="_blank" href={"http://" +university.website}>
                                {university.website}
                            </a>
                        </p>
                    </div>
                </div>

                <div className="location-container">
                    <div className="location-icon">
                        <i className="fa-sharp fa-solid fa-map-location"></i>
                        <h1>ទីតាំង</h1>
                    </div>
                    <div className="address">{university.addressKH}</div>
                </div>
            </div>
        );
    }
    return (
        <React.Fragment>
            <NavBar />
            {isLoading ? (
                <div className="loading"></div>
            ) : (
                <main id="bodyContent">
                    {/* <!-- banner --> */}
                    <div className="banner">
                        <div className="banner-container">
                            <img src={university.images[0]} alt="BanneUniversity" />
                        </div>
                        <div className="background-blur">
                            <img id="logoMOEYS" src={MoEYS} alt="MoEYS" />
                            <div className="logo">
                                <img src={university.logo} alt="" />
                                <p>{university.nameKH}</p>
                            </div>
                        </div>
                    </div>

                    {/*<!-- introduction --> */}
                    <div className="overview">
                        {/* <!-- <img id="images" alt="" /> --> */}
                        <div className="description" id="description">
                            <div className="title">ព័ត៍មានទូទៅ</div>
                            {/* <!-- <h3 className="title">ព័ត៍មានទូទៅ</h3>  --> */}
                            <p>{university.aboutKH}</p>
                        </div>
                    </div>
                    {/* <!-- introduction -->

                    <!-- menu detail click  --> */}
                    <section className="program">
                        <div className="sidebar-menu">
                            <nav className="nav">
                                <ul className="ul-container">
                                    <li className="active programs" data-content="program" onClick={changePage}>ថ្នាក់បរិញ្ញាបត្រ</li>
                                    <li className="curriculum" data-content="curriculum" onClick={changePage}>កម្មវិធីសិក្សា</li>
                                    <li className="contact" data-content="contact" onClick={changePage}>ទំនាក់ទំនង</li>
                                </ul>
                            </nav>
                        </div>

                        {/* <!-- Detail information--> */}
                        <div className="center">
                            {element()}
                        </div>
                    </section>
                </main>
            )}

            {/* call function footer */}
            <Footer />
        </React.Fragment>
    );
}
export default Detail;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Universities() {
  // Get params
  const { page } = useParams();

  // Get Universities
  const [isLoading, setIsLoading] = useState(true);
  const [universities, setUniversities] = useState([]);
  const universityRegion = {
    BanteayMeanchey: "បន្ទាយមានជ័យ",
    Battambang: "បាត់ដំបង",
    KampongCham: "កំពង់ចាម",
    KampongChhnang: "កំពង់ឆ្នាំង",
    KampongSpeu: "កំពង់ស្ពឺ",
    KampongThom: "កំពង់ធំ",
    Kampot: "កំពត",
    Kandal: "កណ្ដាល",
    Kep: "កែប",
    KohKong: "កោះកុង",
    Kratie: "ក្រចេះ",
    Mondulkiri: "មណ្ឌលគីរី",
    OddarMeanchey: "ឧត្តរមានជ័យ",
    Pailin: "ប៉ៃលិន",
    PhnomPenh: "ភ្នំពេញ",
    PreahSihanouk: "ព្រះសីហនុ",
    PreahVihear: "ព្រះវិហារ",
    Pursat: "ពោធិ៍សាត់",
    PreyVeng: "ព្រៃវែង",
    Ratanakiri: "រតនគីរី",
    SiemReap: "សៀមរាប",
    StungTreng: "ស្ទឹងត្រែង",
    SvayRieng: "ស្វាយរៀង",
    Takeo: "តាកែវ",
    TboungKhmom: "ត្បូងឃ្មុំ",
  };
  const getUniversities = () => {
    fetch("http://13.213.62.43:3333/api/universities/", {})
      .then((res) => res.json())
      .then((res) => {
        setUniversities(res.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  // Goto Description Page
  const gotoDescription = (event) => {
    const universityId = event.currentTarget.getAttribute("data-id");
    window.location = "/detail/" + universityId;
  };

  // Button Page
  let maxItems = 12;
  let numberPage = Math.ceil(universities.length / maxItems);
  let currentPage;

  if (!page) currentPage = 1;
  else if (page <= numberPage) currentPage = page;
  else currentPage = numberPage;
  const prevPage = () => {
    window.location = "/home/" + (parseInt(currentPage) - 1);
  };
  const nextPage = () => {
    window.location = "/home/" + (parseInt(currentPage) + 1);
  };
  const changePage = (event) => {
    window.location = "/home/" + event.currentTarget.value;
  };

  useEffect(() => {
    getUniversities();
  }, []);

  return (
    <React.Fragment>
      {/*Universities*/}
      <section className="university-container">
        <div className="header-row">
          <div className="column">
            <div className="title">សាកលវិទ្យាល័យ</div>
            <div className="count">មានចំនួន {universities.length}</div>
          </div>
        </div>
        <div id="allUniversities" className="grid-items">
          {isLoading ? (
            <div class="loading"></div>
          ) : (
            // eslint-disable-next-line array-callback-return
            universities.map((university, index) => {
              if (
                index >= maxItems * (currentPage - 1) &&
                index <= maxItems * currentPage - 1
              ) {
                return (
                  <div
                    className="uni-card"
                    data-id={university.id}
                    onClick={gotoDescription}
                  >
                    <div className="img">
                      <img src={university.logo} alt="" />
                    </div>
                    <div className="border">
                      <h5>{university.nameKH}</h5>
                      <a>
                        <i className="fas fa-map-marker-alt"></i>
                        {universityRegion[university.region]}
                      </a>
                    </div>
                  </div>
                );
              }
            })
          )}
        </div>
      </section>

      {/*Button page*/}
      <section className="btn-page-container">
        <div className="btn-group">
          <button id="prev-btn" onClick={prevPage}>
            <i className="fa-solid fa-angles-left"></i>ថយក្រោយ
          </button>
          <ul className="btnPage">
            {Array.from(Array(numberPage), (e, i) => {
              if (i + 1 === parseInt(currentPage))
                return (
                    <li className="page-number active">
                      <button
                          className="btn"
                          disab
                          value={i + 1}
                          onClick={changePage}
                      >
                        {i + 1}
                      </button>
                    </li>
                );
              else
                return (
                    <li className="page-number">
                      <button className="btn" value={i + 1} onClick={changePage}>
                        {i + 1}
                      </button>
                    </li>
                );
            })}
          </ul>
          <button id="next-btn" onClick={nextPage}>
            បន្ទាប់<i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
      </section>
    </React.Fragment>
  );
}

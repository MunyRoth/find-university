import Head from "next/head";
import Navbar from "@/components/navbar"
import Footer from "@/components/footer";
import Universities from "@/components/Universities";

export default function Home() {
    return (
        <>
            <Head>
                <title>Find University</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <Navbar/>

            <main className="bodyContent">
                {/* <!-- section Banner Images --> */}
                <section>
                    <div className="banner-container">
                        <div className="banner-img">
                            <img src="/banner.png" alt="banner" />
                        </div>
                        <div className="banner-text">
                            <img src="/logo.png" alt="logo" />
                            <p className="khmertext">ស្វាគមន៍មកកាន់</p>
                            <p>FIND UNIVERSITY</p>
                        </div>
                    </div>
                </section>

                {/* <!--Start of filter--> */}
                <section className="filter-container">
                    <div className="filter">
                        <div className="locations">
                            <h5>ទីតាំង</h5>
                            <select id="location" className="select-locations">
                                <option selected value="All">
                                    ទាំងអស់
                                </option>
                                <option value="PhnomPenh">ភ្នំពេញ</option>
                                <option value="Kandal">កណ្ដាល</option>
                                <option value="KampongCham">កំពង់ចាម</option>
                                <option value="KampongChhnang">កំពង់ឆ្នាំង</option>
                                <option value="KampongThom">កំពង់ធំ</option>
                                <option value="KampongSpeu">កំពង់ស្ពឺ</option>
                                <option value="Kampot">កំពត</option>
                                <option value="Kep">កែប</option>
                                <option value="KohKong">កោះកុង</option>
                                <option value="Kratie">ក្រចេះ</option>
                                <option value="Takeo">តាកែវ</option>
                                <option value="TboungKhmom">ត្បូងឃ្មុំ</option>
                                <option value="BanteayMeanchey">បន្ទាយមានជ័យ</option>
                                <option value="Battambang">បាត់ដំបង</option>
                                <option value="Pailin">ប៉ៃលិន</option>
                                <option value="Pursat">ពោធិ៍សាត់</option>
                                <option value="PreahVihear">ព្រះវិហារ</option>
                                <option value="PreahSihanouk">ព្រះសីហនុ</option>
                                <option value="PreyVeng">ព្រៃវែង</option>
                                <option value="Mondulkiri">មណ្ឌលគីរី</option>
                                <option value="Ratanakiri">រតនគីរី</option>
                                <option value="SiemReap">សៀមរាប</option>
                                <option value="StungTreng">ស្ទឹងត្រែង</option>
                                <option value="SvayRieng">ស្វាយរៀង</option>
                                <option value="OddarMeanchey">ឧត្តរមានជ័យ</option>
                            </select>
                        </div>
                        <div className="types">
                            <h5>ប្រភេទ</h5>
                            <select id="type" className="select-types">
                                <option value="All">ទាំងអស់</option>
                                <option value="Public">រដ្ឋ</option>
                                <option value="Private">ឯកជន</option>
                            </select>
                        </div>
                    </div>
                </section>
                {/* <!--End of filter--> */}

                <Universities />
            </main>

            <Footer/>
        </>
    )
}

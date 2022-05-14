import { Footerpage } from "../navbarFooter/footer";
import { Navbar } from "../navbarFooter/navbar";
import "../profile/profile.css";

export const Notfound = () => {
    return(
        <>
        <Navbar />
            <div className="notfound">
                <img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA5MDZfMTgg/MDAxNTY3NzUyNDQ0NTgx.Ebcq2J8i8Rg44ixvQyCfmGqAZNCPMjZCrT_Dog7Mts4g.-4d34s3UnvbtDhjS5xU2ZOcuYJIBKcFgp1iAt-lgarIg.PNG.lw_10page/002_notfound%EC%9B%90%EC%9D%B8.png?type=w800" alt="Not Found" />
            </div>
        <Footerpage />
        </>
    )
}
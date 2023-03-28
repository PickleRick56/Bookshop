*{
    box-sizing: border-box;
}


.slider {
    width: 100%;
  height: auto;
    z-index:-1;
    position: relative;
    /* width: 1120px;
    height: 702px; */
    margin: 0 auto;
    background-size: cover;
}

.dots{

    display: block;
    max-width: 100px;
    margin: 20px auto 0 auto;
}

.dots>div {
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: #EFEEF6;
    border-radius: 50%;
}

.dots>div:first-child {
    background-color: #9E98DC
}



button {
    display: inline;
}


.chage_oldBooks{
    cursor: pointer;
    display: flex;
    align-items: end;
    padding-bottom: 36px;
    padding-left: 21px;
    position: absolute;
    top:79px;
    right: -100px;
    height: 204px;
width: 149px;

border-radius: 0px;
background: #9E98DC;
box-shadow: 0px 24px 36px 0px #35315447;
font-family: Montserrat;
font-size: 18px;
font-weight: 700;
line-height: 22px;
letter-spacing: 0em;
text-align: left;

text-transform: uppercase;
}

.chage_oldBooks_p{
    height: 66px;
    width: 109px;
   
    
}

.top_100Books{
    cursor: pointer;
    display: flex;
    align-items: end;
    padding-bottom: 36px;
    padding-left: 21px;
    position: absolute;
    bottom:79px;
    right: -182px;
    height: 273px;
width: 137px;

box-shadow: 0px 24px 36px 0px #35315447;


border-radius: 0px;
background: #FF8FE6;

font-family: Montserrat;
font-size: 18px;
font-weight: 700;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
text-transform: uppercase;

}

.top_100Books_p{
    
    height: 88px;
    width: 69px;
text-transform: uppercase;
}


/* SLIDER */


.image_slider{
    margin-top: 105px;
    margin-bottom: 135px;
    }
    
    .for_slider {
        margin: 0 auto;
        position: relative;
        max-width: 1120px;
    }

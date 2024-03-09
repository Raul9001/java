


      const telebeler  = [
      
      {
        fin:"DH36V7",
        soyadi:"Mamedov",
        ad: "adil",
        telebedirMi: true,
    
      },
     

    
{

    fin:"5GJ2V8",
    soyadi:"Ahmedov",
    ad: "ramiz",
    telebedirMi: true,
      },

      {

        fin:"SUR89N",
        soyadi:"Ansarov",
        ad: "raul",
        telebedirMi: true,



      }
 






      

]


for(let i=0; i<telebeler.length; i++ ) {

    const tbody = document.querySelector("tbody").innerHTML=`<tr>
    <th scope="row">${telebeler[i].fin}</th>
    <td>${telebeler[i].soyadi}</td>
    <td>${telebeler[i].ad}</td>
    <td>${telebeler[i].telebedirMi}</td>
    </tr>
    `
}

   let year = 18
if(year< 18)  {

alert("not have passport")
}

else  {


  alert(" have passport")

}


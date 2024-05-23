const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?json=1`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(`you are in ${data.city},${data.country}`);
    });
};
whereAmI(52.588, 13.381);

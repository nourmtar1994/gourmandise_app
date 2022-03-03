import axios from "axios";

export const getPointVente = () =>
  new Promise((res, rej) => {
    axios
      .get("http://193.95.69.50:8585/api/pt_de_vente/read_pt.php")
      .then((data) => res(data.data))
      .catch((err) => rej(err));
  });

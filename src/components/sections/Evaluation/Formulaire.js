import { Card, Checkbox, Radio, Space, Typography, Rate, Input } from "antd";
import { Link } from "react-router-dom";

import Select from "../../elements/Select";
import React, { useState } from "react";

import * as classes from "./Formulaire.module.css";
import Button from "../../elements/Button";

const { Title, Text } = Typography;

const serveurs = [
  {
    label: "Souriants",
    value: "Souriants",
  },
  {
    label: "Attentif",
    value: "Attentif",
  },
  {
    label: "Sympathiques",
    value: "Sympathiques",
  },
  {
    label: "Pas souriants",
    value: "Pas_souriants",
  },
  {
    label: "Nerveux",
    value: "Nerveux",
  },
];

const commandes_type = [
  {
    label: "Mariages et fêtes",
    value: "mariages_fetes",
  },
  {
    label: "Aid",
    value: "aid",
  },
  {
    label: "Consommation personnelle",
    value: "consomommation_personnel",
  },
];

const commandes_cause = [
  {
    label: "Le goût",
    value: "gout",
  },
  {
    label: "Le prix",
    value: "prix",
  },
  {
    label: "Consommation personnelle",
    value: "consomommation_personnel",
  },
];

const Formulaire = () => {
  const [EvaluationData, setEvaluationData] = useState({});

  return (
    <>
      <Space className={classes.header} draggable>
        <Title level={2} style={{ color: "#bf9a62" }}>
          Évaluation
        </Title>
        <Text type="secondary" className={classes.description}>
          Merci de répondre au questionnaire suivant dans le but d'améliorer nos
          services (c'est un questionnaire anonyme )
        </Text>
      </Space>
      <Card
        align="left"
        hoverable
        className={classes.formCard}
        title="Quel point de vente ou espace de gourmandise le plus proche de vous ? *"
      >
        <Select
          placeholder={"Sélectionner"}
          onChange={(e) =>
            setEvaluationData({ ...EvaluationData, local: e.target.value })
          }
        >
          <option value={"Tunis"}>Lac 1</option>
          <option value={"Ariana"}>Marsa</option>
          <option value={"Ben Arous"}>...</option>
        </Select>
      </Card>
      <Card
        align="left"
        hoverable
        className={classes.formCard}
        title="Vous êtes : *"
      >
        <Radio.Group
          name="sexe"
          onChange={(e) =>
            setEvaluationData({ ...EvaluationData, sexe: e.target.value })
          }
        >
          <Radio value="F"> Femme</Radio>
          <Radio value="H">Homme </Radio>
        </Radio.Group>
      </Card>

      <Card
        align="left"
        hoverable
        className={classes.formCard}
        title="Votre age est :"
      >
        <Radio.Group
          name="age"
          onChange={(e) =>
            setEvaluationData({ ...EvaluationData, age: e.target.value })
          }
        >
          <Radio value={"-18"}>moins de 18</Radio>
          <br />
          <Radio value={"12-25"}>entre 12 et 25</Radio>
          <br />
          <Radio value={"26-36"}>entre 26 et 36</Radio>
          <br />
          <Radio value={"37-45"}>entre 37 et 45</Radio>
          <br />
          <Radio value={"46+"}>plus de 46</Radio>
          <br />
        </Radio.Group>
      </Card>
      <Card
        align="left"
        hoverable
        className={classes.formCard}
        title="Où habitez-vous ? *"
      >
        <Select
          name="region"
          placeholder={"Sélectionner"}
          onChange={(e) =>
            setEvaluationData({ ...EvaluationData, region: e.target.value })
          }
        >
          <option value={"Tunis"}>Tunis</option>
          <option value={"Ariana"}>Ariana</option>
          <option value={"Ben Arous"}>Ben Arous</option>
          <option value={"Bizerte"}>Bizerte</option>
          <option value={"Manouba"}>Manouba</option>
          <option value={"Jendouba"}>Jendouba</option>
          <option value={"Le_Kef"}>Le Kef</option>
          <option value={""}>Manouba</option>
        </Select>
      </Card>

      <Card
        align="left"
        hoverable
        className={classes.formCard}
        title="Combien de fois vous visitez cet point de vente par mois ? *"
      >
        <Radio.Group
          name="nbr_visite"
          onChange={(e) =>
            setEvaluationData({ ...EvaluationData, nbr_visite: e.target.value })
          }
        >
          <Radio value="-5"> moins de 5</Radio>
          <Radio value="5-10">entre 5 et 10 fois </Radio>
          <Radio value="10+">plus de 10 </Radio>
        </Radio.Group>
      </Card>
      <Card
        align="left"
        hoverable
        className={classes.formCard}
        title="Comment trouvez vous le service de cet point de vente ? *"
      >
        <Radio.Group
          name="service"
          onChange={(e) =>
            setEvaluationData({ ...EvaluationData, service: e.target.value })
          }
        >
          <Radio value="Excellent"> Excellent</Radio>
          <Radio value="Bon">Bon</Radio>
          <Radio value="Mauvais">Mauvais </Radio>
        </Radio.Group>
      </Card>
      <Card
        align="left"
        hoverable
        className={classes.formCard}
        title="Comment trouvez vous cet espace de vente ? *"
      >
        <Radio.Group
          name="avis_espace"
          onChange={(e) =>
            setEvaluationData({
              ...EvaluationData,
              avis_espace: e.target.value,
            })
          }
        >
          <Radio value="Excellent"> Spacieux</Radio>
          <Radio value="Bon">Moyen</Radio>
          <Radio value="Mauvais">Non spacieux </Radio>
        </Radio.Group>
      </Card>
      <Card
        align="left"
        hoverable
        className={classes.formCard}
        title="Comment trouvez vous la propreté de cet espace de vente ? *"
      >
        <Radio.Group
          name="proprete_espace"
          onChange={(e) =>
            setEvaluationData({
              ...EvaluationData,
              proprete_espace: e.target.value,
            })
          }
        >
          <Radio value="Tres_propre">Très propre</Radio>
          <Radio value="Propre">Propre</Radio>
          <Radio value="Non_propre">Non propre </Radio>
        </Radio.Group>
      </Card>
      <Card
        align="left"
        hoverable
        className={classes.formCard}
        title="La modernité de cet espace de vente est : *"
      >
        <Radio.Group
          name="modernite"
          onChange={(e) =>
            setEvaluationData({
              ...EvaluationData,
              modernite: e.target.value,
            })
          }
        >
          <Radio value="Tres_moderne">Très moderne</Radio>
          <Radio value="Normal">Normal</Radio>
          <Radio value="Non_moderne">Non moderne</Radio>
        </Radio.Group>
      </Card>
      <Card align="left" hoverable title="Comment trouvez vous les prix : *">
        <Radio.Group
          name="prix"
          onChange={(e) =>
            setEvaluationData({
              ...EvaluationData,
              prix: e.target.value,
            })
          }
        >
          <Radio value="Raisonnable">Raisonnable</Radio>
          <Radio value="Excessivement_cher">Excessivement cher</Radio>
          <Radio value="Cher">Cher</Radio>
        </Radio.Group>
      </Card>
      <Card
        align="left"
        hoverable
        className={classes.formCard}
        title="Les serveurs de cet point de vente sont ? *"
      >
        <Checkbox.Group
          options={serveurs}
          name="serveurs"
          // onChange={(e) =>
          //   setEvaluationData({
          //     ...EvaluationData,
          //     serveurs: e.target.value,
          //   })
          // }
        />
      </Card>
      <Card
        align="left"
        hoverable
        title="Vos commandes sont généralement pour : *"
      >
        <Checkbox.Group
          options={commandes_type}
          name="commandes_type"
          // onChange={(e) =>
          //   setEvaluationData({
          //     ...EvaluationData,
          //     commandes_type: e.target.value,
          //   })
          // }
        ></Checkbox.Group>
      </Card>
      <br />
      <Card
        align="left"
        hoverable
        className={classes.formCard}
        title="Vous passez votre commande de produits selon : *"
      >
        <Checkbox.Group
          options={commandes_cause}
          name="commandes_cause"
          onChange={(e) =>
            setEvaluationData({
              ...EvaluationData,
              commandes_cause: e.target.value,
            })
          }
        />
      </Card>
      <Card
        align="left"
        hoverable
        className={classes.formCard}
        title="Vous êtes satisfaits des produits commandés : *"
      >
        <Radio.Group
          name="commandes_cause"
          onChange={(e) =>
            setEvaluationData({
              ...EvaluationData,
              commandes_cause: e.target.value,
            })
          }
        >
          <Radio value="gout">Très satisfaits</Radio>
          <Radio value="Satisfait">Satisfait</Radio>
          <Radio value="non-Satisfait">Non satisfaits</Radio>
        </Radio.Group>
      </Card>
      <Card
        align="center"
        hoverable
        className={classes.formCard}
        title="Donnez une note de votre satisfaction pour cet point de vente : *"
      >
        <Rate
          name="satisfaction_vente"
          allowHalf
          defaultValue={5}
          onChange={(e) =>
            setEvaluationData({
              ...EvaluationData,
              satisfaction_vente: e.target.value,
            })
          }
        />
      </Card>
      <Card
        align="center"
        hoverable
        className={classes.formCard}
        title="Savez vous que gourmandise a un site de commande en ligne : *"
      >
        <Radio.Group
          name="commandes_ligne"
          onChange={(e) =>
            setEvaluationData({
              ...EvaluationData,
              commandes_ligne: e.target.value,
            })
          }
        >
          <Radio value={true}>Oui</Radio>
          <Radio value={false}>Non</Radio>
        </Radio.Group>
      </Card>

      <Card
        align="center"
        hoverable
        className={classes.formCard}
        title="Si oui, et vous avez déjà commander en ligne, donnez votre dégréé de satisfaction pour le service de livraison"
      >
        <Rate
          allowHalf
          defaultValue={5}
          onChange={(e) =>
            setEvaluationData({
              ...EvaluationData,
              satisfaction_livraison: e.target.value,
            })
          }
        />
      </Card>

      <Card
        align="left"
        hoverable
        className={classes.formCard}
        title="Est ce que vous aimez : *"
      >
        <Radio.Group
          name="commandes_ligne"
          onChange={(e) =>
            setEvaluationData({
              ...EvaluationData,
              type_commande: e.target.value,
            })
          }
        >
          <Radio value={"ligne"}>passer des commandes en ligne</Radio>
          <Radio value={"visite"}>visiter l'espace directement</Radio>
        </Radio.Group>
      </Card>

      <Card
        align="left"
        hoverable
        className={classes.formCard}
        title="Est ce que la commande est : *"
      >
        <Radio.Group
          name="commandes_avis"
          onChange={(e) =>
            setEvaluationData({
              ...EvaluationData,
              commandes_ligne: e.target.value,
            })
          }
        >
          <Radio value={"Délicieuse"}>Délicieuse</Radio>
          <Radio value={"Moyenne"}>Moyenne</Radio>
          <Radio value={"Mauvaise"}>Mauvaise</Radio>
        </Radio.Group>
      </Card>
      <Card
        align="left"
        hoverable
        className={classes.formCard}
        title="Qu'est ce que vous proposez pour améliorer notre service ?"
      >
        <Input size="large" type="text" />
      </Card>
      <Card hoverable className={classes.formCard} title="">
        Merci pour vos réponses on va prendre en considération vos avis !
      </Card>

      <Link
        to="#0"
        className="button button-primary button-wide-mobile button-sm"
        style={{ width: "100%", borderRadius: "10px" }}
      >
        Envoyer
      </Link>
    </>
  );
};
export default Formulaire;

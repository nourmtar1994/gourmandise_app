import {
  Card,
  Checkbox,
  Radio,
  Space,
  Typography,
  Rate,
  Input,
  Form,
} from "antd";
import { Link } from "react-router-dom";

import Select from "../../elements/Select";
import React, { useEffect, useState } from "react";

import * as classes from "./Formulaire.module.css";

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

const Formulaire = ({ setEvalution }) => {

  const [EvaluationData, setEvaluationData] = useState({});
  const [form] = Form.useForm();

  useEffect(() => {
    console.log(EvaluationData);
  }, [EvaluationData]);

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

      <Form
        form={form}
        name="nest-messages"
        autoComplete="off"
        scrollToFirstError
      >
        <Card
          align="left"
          hoverable
          className={classes.formCard}
          title="Quel point de vente ou espace de gourmandise le plus proche de vous ? *"
        >
          <Form.Item
            name="local"
            rules={[
              {
                required: true,
                message: "Veuiliez Scanner !",
              },
            ]}
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
          </Form.Item>
        </Card>
        <Card
          align="left"
          hoverable
          className={classes.formCard}
          title="Vous êtes : *"
        >
          <Form.Item
            name="sexe"
            rules={[
              {
                required: true,
                message: "Choisir votre sexe !",
              },
            ]}
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
          </Form.Item>
        </Card>
        <Card
          align="left"
          hoverable
          className={classes.formCard}
          title="Votre age est :"
        >
          <Form.Item
            name="age"
            rules={[
              {
                required: true,
                message: "Sélectionner votre age !",
              },
            ]}
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
          </Form.Item>
        </Card>
        <Card
          align="left"
          hoverable
          className={classes.formCard}
          title="Où habitez-vous ? *"
        >
          <Form.Item
            name="region"
            rules={[
              {
                required: true,
                message: "Sélectionner votre region !",
              },
            ]}
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
          </Form.Item>
        </Card>
        <Card
          align="left"
          hoverable
          className={classes.formCard}
          title="Combien de fois vous visitez cet point de vente par mois ? *"
        >
          <Form.Item
            name="nbr_visite"
            rules={[
              {
                required: true,
                message: "Sélectionner le nombre de visite !",
              },
            ]}
          >
            <Radio.Group
              name="nbr_visite"
              onChange={(e) =>
                setEvaluationData({
                  ...EvaluationData,
                  nbr_visite: e.target.value,
                })
              }
            >
              <Radio value="-5"> moins de 5</Radio>
              <Radio value="5-10">entre 5 et 10 fois </Radio>
              <Radio value="10+">plus de 10 </Radio>
            </Radio.Group>
          </Form.Item>
        </Card>
        <Card
          align="left"
          hoverable
          className={classes.formCard}
          title="Comment trouvez vous le service de cet point de vente ? *"
        >
          <Form.Item name="service">
            <Radio.Group
              name="service"
              onChange={(e) =>
                setEvaluationData({
                  ...EvaluationData,
                  service: e.target.value,
                })
              }
            >
              <Radio value="Excellent"> Excellent</Radio>
              <Radio value="Bon">Bon</Radio>
              <Radio value="Mauvais">Mauvais </Radio>
            </Radio.Group>
          </Form.Item>
        </Card>
        <Card
          align="left"
          hoverable
          className={classes.formCard}
          title="Comment trouvez vous cet espace de vente ? *"
        >
          <Form.Item name="avis_espace">
            <Radio.Group
              name="avis_espace"
              onChange={(e) =>
                setEvaluationData({
                  ...EvaluationData,
                  avis_espace: e.target.value,
                })
              }
            >
              <Radio value="Spacieux"> Spacieux</Radio>
              <Radio value="Moyen">Moyen</Radio>
              <Radio value="Non-spacieux">Non spacieux </Radio>
            </Radio.Group>
          </Form.Item>
        </Card>
        <Card
          align="left"
          hoverable
          className={classes.formCard}
          title="Comment trouvez vous la propreté de cet espace de vente ? *"
        >
          <Form.Item name="proprete_espace">
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
          </Form.Item>
        </Card>

        <Card
          className={classes.formCard}
          align="left"
          hoverable
          title="La modernité de cet espace de vente est : *"
        >
          <Form.Item name="modernite">
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
          </Form.Item>
        </Card>

        <Card
          className={classes.formCard}
          align="left"
          hoverable
          title="Comment trouvez vous les prix : *"
        >
          <Form.Item name="prix">
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
          </Form.Item>
        </Card>
        <Card
          className={classes.formCard}
          align="left"
          hoverable
          title="Les serveurs de cet point de vente sont ? *"
        >
          <Form.Item name="serveurs">
            <Checkbox.Group
              options={serveurs}
              name="serveurs"
              onChange={(e) =>
                setEvaluationData({
                  ...EvaluationData,
                  serveurs: e,
                })
              }
            />
          </Form.Item>
        </Card>
        <Card
          className={classes.formCard}
          align="left"
          hoverable
          title="Vos commandes sont généralement pour : *"
        >
          <Form.Item name="commandes_type">
            <Checkbox.Group
              options={commandes_type}
              name="commandes_type"
              onChange={(e) =>
                setEvaluationData({
                  ...EvaluationData,
                  commandes_type: e,
                })
              }
            ></Checkbox.Group>
          </Form.Item>
        </Card>

        <Card
          align="left"
          hoverable
          className={classes.formCard}
          title="Vous passez votre commande de produits selon : *"
        >
          <Form.Item name="commandes_cause">
            <Checkbox.Group
              options={commandes_cause}
              name="commandes_cause"
              onChange={(e) =>
                setEvaluationData({
                  ...EvaluationData,
                  commandes_cause: e,
                })
              }
            />
          </Form.Item>
        </Card>
        <Card
          align="left"
          hoverable
          className={classes.formCard}
          title="Vous êtes satisfaits des produits commandés : *"
        >
          <Form.Item name="satisfaction_client">
            <Radio.Group
              name="satisfaction_client"
              onChange={(e) =>
                setEvaluationData({
                  ...EvaluationData,
                  satisfaction_client: e.target.value,
                })
              }
            >
              <Radio value="gout">Très satisfaits</Radio>
              <Radio value="Satisfait">Satisfait</Radio>
              <Radio value="non-Satisfait">Non satisfaits</Radio>
            </Radio.Group>
          </Form.Item>
        </Card>
        <Card
          align="left"
          hoverable
          className={classes.formCard}
          title="Donnez une note de votre satisfaction pour cet point de vente : *"
        >
          <Form.Item name="satisfaction_vente">
            <Rate
              name="satisfaction_vente"
              allowHalf
              defaultValue={5}
              onChange={(e) =>
                setEvaluationData({
                  ...EvaluationData,
                  satisfaction_vente: e,
                })
              }
            />
          </Form.Item>
        </Card>
        <Card
          align="left"
          hoverable
          className={classes.formCard}
          title="Savez vous que gourmandise a un site de commande en ligne : *"
        >
          <Form.Item name="commandes_ligne">
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
          </Form.Item>
        </Card>
        <Card
          align="left"
          hoverable
          className={classes.formCard}
          title="Si oui, et vous avez déjà commander en ligne, donnez votre dégréé de satisfaction pour le service de livraison"
        >
          <Form.Item name="satisfaction_livraison">
            <Rate
              name="satisfaction_livraison"
              allowHalf
              defaultValue={5}
              onChange={(e) =>
                setEvaluationData({
                  ...EvaluationData,
                  satisfaction_livraison: e,
                })
              }
            />
          </Form.Item>
        </Card>
        <Card
          align="left"
          hoverable
          className={classes.formCard}
          title="Est ce que vous aimez : *"
        >
          <Form.Item name="type_commande">
            <Radio.Group
              name="type_commande"
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
          </Form.Item>
        </Card>
        <Card
          align="left"
          hoverable
          className={classes.formCard}
          title="Est ce que la commande est : *"
        >
          <Form.Item name="commandes_avis">
            <Radio.Group
              name="commandes_avis"
              onChange={(e) =>
                setEvaluationData({
                  ...EvaluationData,
                  commandes_avis: e.target.value,
                })
              }
            >
              <Radio value={"Délicieuse"}>Délicieuse</Radio>
              <Radio value={"Moyenne"}>Moyenne</Radio>
              <Radio value={"Mauvaise"}>Mauvaise</Radio>
            </Radio.Group>
          </Form.Item>
        </Card>
        <Card
          align="left"
          hoverable
          className={classes.formCard}
          title="Qu'est ce que vous proposez pour améliorer notre service ?"
        >
          <Form.Item name="proposition">
            <Input name="proposition" size="large" type="text" />
          </Form.Item>
        </Card>
        <Card hoverable className={classes.formCard} title="">
          Merci pour vos réponses on va prendre en considération vos avis !
        </Card>
        <Link
          type="submit"
          to="#0"
          className="button button-primary button-wide-mobile button-sm"
          style={{ width: "100%", borderRadius: "10px" }}
          onClick={() => {
            setEvalution(true);
          }}
        >
          Envoyer
        </Link>
      </Form>
    </>
  );
};
export default Formulaire;

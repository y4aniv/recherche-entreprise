export interface Response {
  // soit 200 soit 400
  erreur?: string;
  results?: {
    /**
     * Unique company number
     */
    siren: string;

    /**
     * Fields constructed from name fields: legal unit name | Last name and first name | Unknown name.
     * @source SIRENE Database
     */
    nom_complet: string;

    /**
     * Corporate name for legal entities.
     * @source SIRENE Database
     */
    nom_raison_sociale: string;

    /**
     * Reduced form of the corporate name or denomination of a legal entity or public body.
     * @source SIRENE Database
     */
    sigle?: string;

    /**
     * Number of establishments in legal unit
     */
    nombre_etablissements: number;

    /**
     * Number of open establishments in the legal unit
     */
    nombre_etablissements_ouverts: number;

    siege: {
      /**
       * Establishment's main activity.
       * @source SIRENE Database
       */
      activite_principale: string;

      /**
       * Establishment's main activity in the Trade Register
       * @source SIRENE Database
       */
      activite_principale_registre_metier?: string;

      /**
       * Year of validity of the establishment's payroll.
       * @source SIRENE Database
       */
      annee_tranche_effectif_salarie?: number;

      /**
       * Fields built from SIRENE database address fields: address complement + lane number + repetition index + lane type + lane label + special distribution + (postal code + commune label | cedex + cedex label) + foreign commune label + foreign country label.
       * @source SIRENE Database
       */
      adresse: string;

      /**
       * Employer status of head office.
       * @source SIRENE Database
       */
      caractere_employeur: string;

      /**
       * Establishment cedex code. This optional variable is a component of the address.
       * @source SIRENE Database
       */
      cedex?: string;

      /**
       * Country code for the address of an establishment located abroad.
       * @source SIRENE Database
       */
      code_pays_etranger?: string;

      /*
       * Postal code of business address.
       * @source SIRENE Database
       */
      code_postal?: string;

      /**
       * The geographic code of the commune in which the plant is located, excluding foreign addresses.
       * @source SIRENE Database
       */
      commune?: string;

      /**
       * The geographic code of the commune in which the plant is located, excluding foreign addresses.
       * @source SIRENE Database
       */
      complement_adresse?: string;

      /**
       * Establishment creation date.
       * @source SIRENE Database
       */
      date_creation?: Date;

      /**
       * Establishment closure date.
       * @source SIRENE Historical Database
       */
      date_fermeture?: Date;

      /**
       * Start date of a period in the history of an establishment
       * @source SIRENE Database
       */
      date_debut_activite?: Date;

      /**
       * Date of last processing of the establishment in the Sirene register.
       * @source SIRENE Database
       */
      date_mise_a_jour?: Date;

      /**
       * Establishment department code.
       * @source SIRENE Database
       */
      departement?: string;

      /**
       * Special plant distribution.
       * @source SIRENE Database
       */
      distribution_speciale?: string;

      /**
       * The establishment is the headquarters of the legal unit.
       */
      est_siege: boolean;

      /**
       * Administrative status of establishment (A: Active, F: Closed).
       * @source SIRENE Database
       */
      etat_administratif: "A" | "F";

      /**
       * Geographic identifier of the establishment's address.
       * @source SIRENE Database
       * @source data.gouv
       */
      geo_id?: string;

      /**
       * Number repetition index (B for Bis, T for TER, letters or digits to identify different buildings at the same address, etc.).
       * @source SIRENE Database
       */
      indice_repetition?: string;

      /**
       * Latitude of establishment.
       * @source SIRENE Database
       * @source data.gouv
       */
      latitude: number;

      /**
       * Label associated with cedex code.
       * @source SIRENE Database
       */
      libelle_cedex?: string;

      /**
       * Name of commune.
       * @source SIRENE Database
       */
      libelle_commune: string;

      /**
       * Name of the commune for an establishment located abroad.
       * @source SIRENE Database
       */
      libelle_commune_etranger?: string;

      /**
       * Country code for an establishment located abroad.
       * @source SIRENE Database
       */
      libelle_pays_etranger?: string;

      /**
       * Street name.
       * @source SIRENE Database
       */
      libelle_voie: string;

      /**
       * List of company signs.
       * @source SIRENE Database
       */
      liste_enseignes?: string[];

      /**
       * List of FINESS identifiers for the facility.
       * @source Ministère des Solidarités et de la Santé
       */
      liste_finess?: string[];

      /**
       * List of collective bargaining agreements.
       * @source Ministère du Travail
       */
      liste_idcc: string[];

      /**
       * List of the establishment's organic identifiers.
       * @source Agence Bio
       */
      liste_id_bio: string[];

      /**
       * List of the establishment's RGE identifiers.
       * @source ADEME
       */
      liste_rge: string[];

      /**
       * List of institutions' UAI identifiers.
       * @source Ministère de l'Enseignement Supérieur et de la Recherche
       */
      liste_uai: string[];

      /**
       * Establishment longitude.
       * @source SIRENE Database
       * @source data.gouv
       */
      longitude: string;

      /**
       * Common name of establishment.
       * @source SIRENE Database
       */
      nom_commercial?: string;

      /**
       * Number in lane.
       * @source SIRENE Database
       */
      numero_voie: string;

      /**
       * Establishment region code.
       * @source SIRENE Database
       */
      region?: string;

      /**
       * EPCI siren number.
       */
      epri?: string;

      /**
       * The unique number of the head office.
       */
      siret: string;

      /**
       * Establishment's headcount range.
       * @source SIRENE Database
       */
      tranche_effectif_salarie: string;

      /**
       * Address channel type.
       * @source SIRENE Database
       */
      type_voie: string;
    };

    /**
     * Date of creation of legal unit.
     * @source SIRENE Database
     */
    date_creation: Date;

    /**
     * Date of legal unit closure.
     * @source SIRENE Historical Database
     */
    date_fermeture?: Date;

    /**
     * Legal unit headcount range.
     * @source SIRENE Database
     */
    tranche_effectif_salarie: string;

    /**
     * Year of validity of the legal unit's payroll.
     * @source SIRENE Database
     */
    annee_tranche_effectif_salarie: number;

    /**
     * Date of last modification of a variable at legal unit level, whether historized or not.
     * @source SIRENE Database
     */
    date_mise_a_jour: Date;

    /**
     * Business category of legal unit.
     * @source SIRENE Database
     */
    categorie_entreprise: string;

    /**
     * Employer character of the legal unit.
     * @source SIRENE Database
     */
    caractere_employeur: string;

    /**
     * Year of validity corresponding to company category.
     * @source SIRENE Database
     */
    annee_categorie_entreprise: string;

    /**
     * Administrative status of the legal unit.
     * @source SIRENE Database
     */
    etat_administratif: string;

    /**
     * Legal category of the legal unit.
     * @source SIRENE Database
     */
    nature_juridique: string;

    /**
     * Principal activity code (APE) of the legal unit.
     * @source SIRENE Database
     */
    activite_principale: string;

    /**
     * Calculated on the basis of the main activity.
     */
    section_activite_principale: string;

    /**
     * Legal unit broadcast status. All legal units available for broadcast have broadcast status "O". Legal units for which an objection has been lodged have the status of "P" for partial distribution.
     * @source SIRENE Database
     */
    statut_diffusion: "O" | "P";

    matching_etablissements?: {
      /**
       * Plant's main activity.
       * @source SIRENE Database
       */
      activite_principale: string;

      /**
       * Fields built from SIRENE database address fields: address complement + lane number + repetition index + lane type + lane label + special distribution + (postal code + commune label | cedex + cedex label) + foreign commune label + foreign country label.
       */
      adresse: string;

      /**
       * Employer status.
       * @source SIRENE Database
       */
      caractere_employeur: string;

      /**
       * The geographic code of the municipality in which the plant is located, excluding foreign addresses.
       * @source SIRENE Database
       */
      commune: string;

      /**
       * The establishment is the headquarters of the legal unit.
       */
      est_siege: boolean;

      /**
       * Administrative status of facility (A: Active, F: Closed).
       * @source SIRENE Database
       */
      etat_administratif: "A" | "F";

      /**
       * Geographic identifier of facility address
       * @source SIRENE Database
       * @source data.gouv
       */
      geo_id?: string;

      /**
       * Latitude of establishment.
       * @source SIRENE Database
       * @source data.gouv
       */
      latitude: string;

      /**
       * Municipality name.
       * @source SIRENE Database
       */
      libelle_commune: string;

      /**
       * List of company signs.
       * @source SIRENE Database
       */
      liste_enseignes?: string[];

      /**
       * List of FINESS identifiers for the facility.
       * @source Ministère des Solidarités et de la Santé
       */
      liste_finess?: string[];

      /**
       * List of collective bargaining agreements.
       * @source Ministère du Travail
       */
      liste_idcc: string[];

      /**
       * List of the establishment's RGE identifiers.
       * @source ADEME
       */
      liste_rge: string[];

      /**
       * List of institutions' UAI identifiers.
       * @source Ministère de l'Enseignement Supérieur et de la Recherche
       */
      liste_uai: string[];

      /**
       * Longitude of establishment.
       * @source SIRENE Database
       * @source data.gouv
       */
      longitude: string;

      /**
       * Common name of establishment.
       * @source SIRENE Database
       */
      nom_commercial?: string;

      /**
       * Region of establishment.
       * @source SIRENE Database
       */
      region?: string;

      /**
       * EPCI siren number.
       */
      epci?: string;

      /**
       * The establishment's unique number.
       */
      siret: string;

      /**
       * Establishment's headcount range.
       * @source SIRENE Database
       */
      tranche_effectif_salarie: string;
    }[];

    dirigeants: {
      /**
       * Last name of the manager.
       */
      nom?: string;

      /**
       * First name(s) of the manager.
       */
      prenoms?: string;

      /**
       * Year of birth of the manager.
       */
      annee_de_naissance?: string;

      /**
       * Year and month of birth of the manager.
       */
      date_de_naissance?: string;

      /**
       * Manager's nationality.
       */
      nationalite?: string;

      siren?: string;

      /**
       * Name of legal unit
       */
      denomination?: string;

      /**
       * Manager's title.
       */
      qualite: string;

      /**
       * Type of director.
       */
      type_dirigeant: string;
    }[];

    finances: {
      [year: string]: {
        ca: number;
        resultat_net: number;
      };
    };

    complements: {
      collectivite_territoriale: {
        /**
         * Local authority INSEE code.
         */
        code_insee: string;

        /**
         * Local authority code.
         */
        code: string;

        /**
         * Local authority level.
         */
        niveau: string;

        elus: {
          /**
           * Last name of the elected official.
           */
          nom: string;

          /**
           * First name(s) of the elected official.
           */
          prenoms: string;

          /**
           * Year of birth of the elected official.
           */
          annee_de_naissance: string;

          /**
           * Elected function.
           */
          fonction: string;

          /**
           * Sex of the elected official.
           */
          sexe: string;
        }[];
      };

      /**
       * Indicates whether at least one establishment has a collective agreement.
       */
      convention_collective_renseignee: boolean;

      /**
       * List of collective bargaining agreements in the legal unit.
       * @source Ministère du Travail
       */
      liste_idcc: string[];

      /**
       * Indicates whether at least one establishment has a professional equality index for M/F.
       */
      egapro_renseignee: boolean;

      /**
       * Association
       * @source INSEE
       */
      est_association: boolean;

      /**
       * Company with at least one certified organic facility.
       * @source Agence Bio
       */
      est_bio: boolean;

      /**
       * Sole proprietorship.
       */
      est_entrepreneur_individuel: boolean;

      /**
       * Company with a performing arts license.
       * @source Ministère de la Culture
       */
      est_entrepreneur_spectacle: boolean;

      /**
       * Social economy company
       * @source ESS France
       * @source INSEE
       */
      est_ess: boolean;

      /**
       * Company with at least one FINESS establishment/
       * @source Ministère des Solidarités et de la Santé
       */
      est_finess: boolean;

      /**
       * Companies with at least one training organization.
       * @source Ministère du Travail
       */
      est_organisme_formation: boolean;

      /**
       * Company with "Qualiopi" certification
       * @source Ministère du Travail
       */
      est_qualiopi: boolean;

      /**
       * List of business registration numbers for training establishments.
       * @source Ministère du Travail
       */
      liste_id_organisme_formation: string[];

      /**
       * Enterprise with at least one RGE establishment.
       * @source ADEME
       */
      est_rge: boolean;

      /**
       * Social integration structure
       * @source Marché de l'Inclusion
       */
      est_siae: boolean;

      /**
       * Only structures recognized as a public service.
       * @warning This filter is based on the business rules documented [here](https://github.com/etalab/annuaire-entreprises-search-infra/blob/97b81953f060015b881f44482897a066f2cd34cf/data_enrichment.py#L103). This filter is not exhaustive and may return false positives.
       */
      est_service_public: boolean;

      /**
       * A company with a mission.
       */
      est_societe_mission: boolean;

      /**
       * Company with at least one UAI establishment.
       * @source Ministère de l'Enseignement Supérieur et de la Recherche
       */
      est_uai: boolean;

      /**
       * Répertoire National des Associations (RNA) number
       * @source SIRENE Database
       */
      identifiant_association?: string;

      /**
       * Status of establishments applying for organic certification
       * @source Agence Bio
       */
      statut_bio: boolean;

      /**
       * Status of establishments that have applied for a show business license
       * @source Ministère de la Culture
       */
      statut_entrepreneur_spectacle?: string;

      /**
       * Type of inclusion structure
       * @source Marché de l'Inclusion
       */
      type_siae?: string;
    };
  }[];
  total_results: number;

  /**
   * @default 1
   */
  page: number;

  /**
   * Number of results per page limited to 25.
   * @default 10
   */
  per_page: number;
  total_pages: number;
}

export interface SearchQuery {
  /**
   * Search terms (name and/or address, managers, elected representatives)
   */
  q?: string;

  /**
   * The NAF or APE code, an activity code according to the INSEE nomenclature.
   * This parameter accepts a single value or a comma-separated list of values.
   * @example `01.12Z,28.15Z`
   * @see https://www.sirene.fr/sirene/public/variable/apet700-rev2
   */
  activite_principale?: string;

  /**
   * Business category of the legal unit. This parameter accepts a single value or a comma-separated list of values.
   * @example `PME,ETI`
   */
  categorie_entreprise?: "PME" | "ETI" | "GE";

  /**
   * Code affiliated with a local authority (Commune - INSEE code, EPCI - SIREN n°, Département - INSEE code + "D" (except in special cases), Région - INSEE code)
   * @example `75C`
   */
  code_collectivite_territoriale?: string;

  /**
   * Companies with at least one establishment for which the collective bargaining agreement has been entered.
   */
  convention_collective_renseignee?: boolean;

  /**
   * 5-digit postal code. This parameter filters on establishments and accepts a single value or a comma-separated list of values.
   * @example `38540,38189`
   * @see https://www.sirene.fr/sirene/public/variable/codpos
   */
  code_postal?: string;

  /**
   * 5-digit postal code. This parameter filters on establishments and accepts a single value or a comma-separated list of values.
   * @example `01247,01111`
   * @see https://www.insee.fr/fr/information/2114819
   */
  code_commune?: string;

  /**
   * Department code in two or three digits. This parameter filters on establishments and accepts a single value or a comma-separated list of values.
   * @example `02,89`
   * @see https://www.insee.fr/fr/information/6051727
   */
  departement?: string;

  /**
   * Two-digit region code. This parameter filters on establishments and accepts a single value or a comma-separated list of values.
   * @example `11,76`
   * @see https://www.insee.fr/fr/information/6051727
   */
  region?: string;

  /**
   * List of valid epci. This parameter filters on establishments and accepts a single value or a comma-separated list of values.
   * @example `200058519,248100737`
   * @see https://www.insee.fr/fr/information/2510634
   */
  epci?: string;

  /**
   * Only companies with a registered égapro index
   */
  egapro_renseignee?: boolean;

  /**
   * Only companies with an association identifier or a legal nature with "association" (5195, 9210, 9220, 9221, 9222, 9223, 9224, 9230, 9240, 9260).
   */
  est_association?: boolean;

  /**
   * Only companies with a facility certified by the organic agency
   */
  est_bio?: boolean;

  /**
   * Local authorities only.
   */
  est_collectivite_territoriale?: boolean;

  /**
   * Sole proprietorships only.
   */
  est_entrepreneur_individuel?: boolean;

  /**
   * Only companies with an entertainment license.
   */
  est_entrepreneur_spectacle?: boolean;

  /**
   * Only companies belonging to the social economy.
   */
  est_ess?: boolean;

  /**
   * Only companies with an establishment in the health and social sector (FINESS)
   */
  est_finess?: boolean;

  /**
   * Only companies with a training organization establishment
   */
  est_organisme_formation?: boolean;

  /**
   * Only companies with "Qualiopi" certification
   */
  est_qualiopi?: boolean;

  /**
   * Only companies recognized as environmental guarantors (RGE).
   */
  est_rge?: boolean;

  /**
   * Only SIAE (structures d'insertion par l'activité économique).
   */
  est_siae?: boolean;

  /**
   * Only structures recognized as a public service
   * @warning This filter is based on the business rules documented [here](https://github.com/etalab/annuaire-entreprises-search-infra/blob/97b81953f060015b881f44482897a066f2cd34cf/data_enrichment.py#L103). This filter is not exhaustive and may return false positives.
   */
  est_service_public?: boolean;

  /**
   * Only companies that fall within the scope of mission-driven companies.
   */
  est_societe_mission?: boolean;

  /**
   * Only companies with a UAI (Unité Administrative Immatriculée) establishment.
   */
  est_uai?: boolean;

  /**
   * Administrative status of the legal unit. "A" for Active, "C" for Ceased.
   */
  etat_administratif?: "A" | "C";

  /**
   * Collective bargaining agreement identifier for a company establishment.
   * @example `1090`
   */
  id_convention_collective?: string;

  /**
   * FINESS identifier for a company establishment.
   * @example `010003853`
   */
  id_finess?: string;

  /**
   * RGE (Reconnues Garantes de l'Environnement) identifier for a company establishment.
   * @example `8611M10D109`
   */
  id_rge?: string;

  /**
   * UAI identifier of a company establishment.
   * @example `0022004T`
   */
  id_uai?: string;

  /**
   * Legal category of the legal unit. This parameter accepts a single value or a comma-separated list of values.
   * @example `7344,6544`
   * @see https://www.insee.fr/fr/information/2028129
   */
  nature_juridique?: string;

  /**
   * Main activity section :

    - `A` - Agriculture, forestry and fishing
    - `B` - Mining and quarrying
    - `C` - Manufacturing industry
    - `D` - Electricity, gas, steam and air conditioning supply
    - `E` - Water production and distribution; sewerage, waste management and remediation
    - `F` - Construction
    - `G` - Trade; repair of motor vehicles and motorcycles
    - `H` - Transportation and warehousing
    - `I` - Accommodation and food services
    - `J` - Information and communication
    - `K` - Financial and insurance activities
    - `L` - Real estate activities
    - `M` - Professional, scientific and technical activities
    - `N` - Administrative and support service activities
    - `O` - Public administration
    - `P` - Education
    - `Q` - Human health and social work
    - `R` - Arts, entertainment and recreation
    - `S` - Other service activities
    - `T` - Activities of households as employers; undifferentiated goods- and services-producing activities of households for own use
    - `U` - Extra-territorial activities
    @example `A,J,U`
    @see https://www.insee.fr/fr/information/2120875
   */
  section_activite_principale?: string;

  /**
   * Range of company employees. This parameter accepts a single value or a comma-separated list of values.
   * @example `NN,00,01`
   * @see https://www.sirene.fr/sirene/public/variable/trancheEffectifsUniteLegale
   */
  tranche_effectif_salarie?: string;

  /**
   * Name of a company stakeholder (manager or elected official).
   * @example `Dupont`
   */
  nom_personne?: string;

  /**
   * First name(s) of a company stakeholder (manager or elected representative).
   * @example `Monsieur`
   */
  prenoms_personne?: string;

  /**
   * Minimum value for the date of birth of a company stakeholder (manager or elected representative)
   * @example `1960-01-01`
   */
  date_naissance_personne_min?: Date;

  /**
   * Maximum value for the date of birth of a company stakeholder (manager or elected representative).
   * @example `1990-01-01`
   */
  date_naissance_personne_max?: Date;

  /**
   * Type of company stakeholder, manager or elected official.
   */
  type_personne?: "dirigeant" | "elu";

  /**
   * Minimum value of company sales
   * @example `100000`
   */
  ca_min?: number;

  /**
   * Maximum value of company sales
   * @example `100000`
   */
  ca_max?: number;

  /**
   * Minimum value of net income
   * @example `100000`
   */
  resultat_net_min?: number;

  /**
   * Maximum value of net income
   * @example `100000`
   */
  resultat_net_max?: number;

  /**
   * Number of related establishments included in the response (matching_establissements). Value between 1 and 100.
   * @default 10
   */
  limite_matching_etablissements?: number;

  /**
   * Returns a minimal response, excluding secondary fields. See `include` for more information.
   */
  minimal?: boolean;

  /**
   * ATTENTION: This parameter can only be called with the `minimal: true` field.
    Allows you to request only some of the secondary fields.

    Possible values:
    - `complements`
    - `management`
    - `finances`
    - `matching_establissements`
    - `headquarters`
    - `score`

    By default, all fields are included except the score.
    @example `siege,complements`
   */
  include?: string;

  /**
   * The number of the page to be returned.
   * @default 1
   */
  page?: number;

  /**
   * The number of results per page is limited to 25.
   * @default 10
   */
  per_page?: number;
}

export interface GeoQuery {
  /**
   * Latitude of establishment (source: the majority of sirets use geocoding from the SIRENE database geocoded by data.gouv, with the exception of those modified after the start of the current month, for which the geolocation is extracted directly from the SIRENE database).
   */
  lat: number;

  /**
   * Longitude de l'établissement (source : la majorité des siret utilisent le géocodage provenant de la base SIRENE géocodée par data.gouv, à l'exception de ceux modifiés après le début du mois en cours, pour lesquels la géolocalisation est directement extraite de la base SIRENE).
   */
  lon: number;

  /**
   * Search radius less than or equal to 50km.
   * @default 5
   */
  radius?: number;

  /**
   * The NAF or APE code, an activity code according to the INSEE nomenclature. This parameter accepts a single value or a comma-separated list of values.
   * @example `01.12Z,28.15Z`
   * @see https://www.sirene.fr/sirene/public/variable/apet700-rev2
   */
  activite_principale?: string;

  /**
   * Main activity section :

    - `A` - Agriculture, forestry and fishing
    - `B` - Mining and quarrying
    - `C` - Manufacturing industry
    - `D` - Electricity, gas, steam and air conditioning supply
    - `E` - Water production and distribution; sewerage, waste management and remediation
    - `F` - Construction
    - `G` - Trade; repair of motor vehicles and motorcycles
    - `H` - Transportation and warehousing
    - `I` - Accommodation and food services
    - `J` - Information and communication
    - `K` - Financial and insurance activities
    - `L` - Real estate activities
    - `M` - Professional, scientific and technical activities
    - `N` - Administrative and support service activities
    - `O` - Public administration
    - `P` - Education
    - `Q` - Human health and social work
    - `R` - Arts, entertainment and recreation
    - `S` - Other service activities
    - `T` - Activities of households as employers; undifferentiated goods- and services-producing activities of households for own use
    - `U` - Extra-territorial activities
    @example `A,J,U`
    @see https://www.insee.fr/fr/information/2120875
   */
  section_activite_principale?: string;

  /**
   * Number of related establishments included in the response (matching_establissements). Value between 1 and 100.
   * @default 10
   */
  limite_matching_etablissements?: number;

  /**
   * Returns a minimal response, excluding secondary fields. See `include` for more information.
   */
  minimal?: boolean;

  /**
   * ATTENTION: This parameter can only be called with the `minimal: true` field.
    Allows you to request only some of the secondary fields.

    Possible values:
    - `complements`
    - `management`
    - `finances`
    - `matching_establissements`
    - `headquarters`
    - `score`

    By default, all fields are included except the score.
    @example `siege,complements`
   */
  include?: string;

  /**
   * The number of the page to be returned.
   * @default 1
   */
  page?: number;

  /**
   * The number of results per page is limited to 25.
   * @default 10
   */
  per_page?: number;
}

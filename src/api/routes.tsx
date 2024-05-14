const ServerUrl = {
  qa: 'https://qa.banacheck.api.apptelink.tech',
  produccion: 'https://qa.linktaskapi.apptelink.solutions',
  local: 'https://989a-157-100-158-182.ngrok-free.app',
};

export const ApiEndpoints = {
  //BaseURL: 'https://conautecqa.apptelink.com', //QA
  BaseURL: ServerUrl.qa,
  BaseApi: '/api',
  Security: {
    this: '/Security',
    register: '/Security/register',
    changePassword: '/Security/changePassword',
    forgetPassword: '/Security/forgetPassword',
  },
  InspectForm: {
    this: '/InspectForm',
    GetAppFormsWithQuestions: '/InspectForm/GetAppFormsWithQuestions',
    SaveResponseQuestionsForm: '/InspectForm/SaveResponseQuestionsForm',
  },
  InspectionOrders: {
    this: '/InspectionOrders',
    GetAllOrders: '/InspectionOrders/GetAllOrders',
  },
  Catalogs: {
    this: '/Catalogs',
    GetFormCatalogs: '/Catalogs/GetFormCatalogs',
  },
  PreguntasDinamicas: '/pruebas/PreguntasDinamicas',
  ImagesForm: {
    this: '/ImagesForm',
    SaveImageInspection: '/ImagesForm/SaveImageInspection',
  },
};

export type enviromentType = 'Producción' | 'Desarrollo' | 'Local';

export const checkEnviroment: enviromentType =
  ApiEndpoints.BaseURL === ServerUrl.local
    ? 'Local'
    : ApiEndpoints.BaseURL === ServerUrl.qa
      ? 'Desarrollo'
      : 'Producción';

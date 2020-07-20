import axios from "axios"
import {} from "react-native-dotenv"
const newPlugin201 = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/7931/storyboard/9129/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const mobile200API = axios.create({
  baseURL: "https://mobile-200-dev-7931.herokuapp.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_customtext_list() {
  return mobile200API.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read() {
  return mobile200API.get(`/api/v1/customtext/{id}/`)
}
function api_v1_customtext_update(requestBody) {
  return mobile200API.put(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_customtext_partial_update(requestBody) {
  return mobile200API.patch(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_gjhuyuit_list() {
  return mobile200API.get(`/api/v1/gjhuyuit/`)
}
function api_v1_gjhuyuit_create(requestBody) {
  return mobile200API.post(`/api/v1/gjhuyuit/`, requestBody)
}
function api_v1_gjhuyuit_read() {
  return mobile200API.get(`/api/v1/gjhuyuit/{id}/`)
}
function api_v1_gjhuyuit_update(requestBody) {
  return mobile200API.put(`/api/v1/gjhuyuit/{id}/`, requestBody)
}
function api_v1_gjhuyuit_partial_update(requestBody) {
  return mobile200API.patch(`/api/v1/gjhuyuit/{id}/`, requestBody)
}
function api_v1_gjhuyuit_delete() {
  return mobile200API.delete(`/api/v1/gjhuyuit/{id}/`)
}
function api_v1_hgfdjfd_list() {
  return mobile200API.get(`/api/v1/hgfdjfd/`)
}
function api_v1_hgfdjfd_create(requestBody) {
  return mobile200API.post(`/api/v1/hgfdjfd/`, requestBody)
}
function api_v1_hgfdjfd_read() {
  return mobile200API.get(`/api/v1/hgfdjfd/{id}/`)
}
function api_v1_hgfdjfd_update(requestBody) {
  return mobile200API.put(`/api/v1/hgfdjfd/{id}/`, requestBody)
}
function api_v1_hgfdjfd_partial_update(requestBody) {
  return mobile200API.patch(`/api/v1/hgfdjfd/{id}/`, requestBody)
}
function api_v1_hgfdjfd_delete() {
  return mobile200API.delete(`/api/v1/hgfdjfd/{id}/`)
}
function api_v1_homepage_list() {
  return mobile200API.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read() {
  return mobile200API.get(`/api/v1/homepage/{id}/`)
}
function api_v1_homepage_update(requestBody) {
  return mobile200API.put(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_homepage_partial_update(requestBody) {
  return mobile200API.patch(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_login_create() {
  return mobile200API.post(`/api/v1/login/`)
}
function api_v1_signup_create(requestBody) {
  return mobile200API.post(`/api/v1/signup/`, requestBody)
}
function rest_auth_login_create(requestBody) {
  return mobile200API.post(`/rest-auth/login/`, requestBody)
}
function rest_auth_logout_list() {
  return mobile200API.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create() {
  return mobile200API.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(requestBody) {
  return mobile200API.post(`/rest-auth/password/change/`, requestBody)
}
function rest_auth_password_reset_create(requestBody) {
  return mobile200API.post(`/rest-auth/password/reset/`, requestBody)
}
function rest_auth_password_reset_confirm_create(requestBody) {
  return mobile200API.post(`/rest-auth/password/reset/confirm/`, requestBody)
}
function rest_auth_registration_create(requestBody) {
  return mobile200API.post(`/rest-auth/registration/`, requestBody)
}
function rest_auth_registration_verify_email_create(requestBody) {
  return mobile200API.post(`/rest-auth/registration/verify-email/`, requestBody)
}
function rest_auth_user_read() {
  return mobile200API.get(`/rest-auth/user/`)
}
function rest_auth_user_update(requestBody) {
  return mobile200API.put(`/rest-auth/user/`, requestBody)
}
function rest_auth_user_partial_update(requestBody) {
  return mobile200API.patch(`/rest-auth/user/`, requestBody)
}
export const apiService = {
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_gjhuyuit_list,
  api_v1_gjhuyuit_create,
  api_v1_gjhuyuit_read,
  api_v1_gjhuyuit_update,
  api_v1_gjhuyuit_partial_update,
  api_v1_gjhuyuit_delete,
  api_v1_hgfdjfd_list,
  api_v1_hgfdjfd_create,
  api_v1_hgfdjfd_read,
  api_v1_hgfdjfd_update,
  api_v1_hgfdjfd_partial_update,
  api_v1_hgfdjfd_delete,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}

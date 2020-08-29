/**
 * Created by huzeyin on 2020/5/12.
 */
import request from '../utils/request'

export function getProjectsByYear (year) {
  return request.post('./index.php', {
    function: 'getProjectsByYear',
    year
  })
}
export function getAccountsByProject (project_code) {
  return request.post('./index.php', {
    function: 'getAccountsByProject',
    project_code
  })
}
export function getAwardsByAccountProject (account_id, project_code) {
  return request.post('./index.php', {
    function: 'getAwardsByAccountProject',
    account_id,
    project_code
  })
}
// export function uploadBackground(project_id){
//   return request.post('./index.php',{
//     function:'uploadBackground',
//     project_id
//   })
// }
export function uploadBackground (formData) {
  return request.post('./index.php', formData).then(function (response) {
    return response
  }).catch(function (error) {
    console.log(error)
  })
}

export function uploadChoose ({ project_id, individualType, teamType, awardForward, chooseAwards }) {
  return request.post('./index.php', {
    function: 'uploadChoose',
    project_id,
    individualType,
    teamType,
    awardForward,
    chooseAwards
  }).then(function (response) {
    return response
  }).catch(function (error) {
    console.log(error)
  })
}

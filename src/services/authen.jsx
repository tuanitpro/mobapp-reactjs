export function getCurrentUser() {
  if (localStorage.getItem('currentUser')) {
    return localStorage.getItem('currentUser')
  }
  return null
}

export function logout(){
  if (localStorage.getItem('currentUser')) {
    return localStorage.removeItem('currentUser')
  }
}

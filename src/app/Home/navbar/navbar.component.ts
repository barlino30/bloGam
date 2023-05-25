import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private afAuth: AngularFireAuth, private modalService: NgbModal) {}

  openRegisterModal(content: any) {
    this.modalService.open(content, { centered: true });
  }
  
  isLoggedIn = false;

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      this.isLoggedIn = !!user;
    });
  }

  registerUser(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registro exitoso, puedes acceder a userCredential.user para obtener información del usuario
        console.log('Registro exitoso:', userCredential.user);
        // Realizar inicio de sesión después del registro
        this.afAuth.signInWithEmailAndPassword(email, password)
          .then(() => {
            console.log('Inicio de sesión exitoso');
          })
          .catch((error) => {
            console.error('Error al iniciar sesión:', error);
          });
      })
      .catch((error) => {
        console.error('Error al registrar usuario:', error);
      });
  }
 

  loginWithGoogle() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        console.log('Inicio de sesión exitoso');
      })
      .catch((error) => {
        console.error('Error al iniciar sesión:', error);
      });
  }
  
  logout() {
    this.afAuth.signOut()
      .then(() => {
        console.log('Cierre de sesión exitoso');
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  }

  
}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent {
  @ViewChild('sendButton') sendButton!: ElementRef;
  @ViewChild('form') form!: ElementRef;

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    mail: new FormControl('', [Validators.required, Validators.email]),
  });

ngAfterViewInit () {
  // Form from EmailJS
  const btn = this.sendButton.nativeElement;
  const myForm = this.form.nativeElement;

  myForm.addEventListener('submit', (event:any) => {
      event.preventDefault();

      btn.value = 'Enviando...';

      const serviceID = 'default_service';
      const templateID = 'template_67j57oj';
      emailjs.init("iXo0sbteEIqTTZnc_");
      emailjs.sendForm(serviceID, templateID, myForm)
        .then(() => {
          btn.value = 'Enviar';
          this.contactForm.reset();
          alert('Mensaje enviado!');
        }, (err) => {
          btn.value = 'Enviar';
          alert(JSON.stringify(err));
        });
    });
}}
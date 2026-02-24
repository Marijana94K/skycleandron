# EmailJS Podešavanje - Uputstvo

## Korak 1: Registracija na EmailJS

1. Idite na https://www.emailjs.com/
2. Kliknite na "Sign Up" (besplatno)
3. Registrujte se sa vašim email adresom (možete koristiti skycleandron@gmail.com)

## Korak 2: Kreiranje Email Service

1. Nakon prijave, idite na **Dashboard**
2. U levom meniju kliknite na **Email Services**
3. Kliknite na **Add New Service**
4. Izaberite **Gmail** (ili drugi email provider koji koristite)
5. Kliknite **Connect Account**
6. Potvrdite povezivanje sa vašim Gmail nalogom
7. Nakon povezivanja, zapamtite **Service ID** (npr. `service_abc123`)

## Korak 3: Kreiranje Email Template

1. U levom meniju kliknite na **Email Templates**
2. Kliknite **Create New Template**
3. Unesite sledeće:

   **Template Name:** `SkyClean Contact Form`
   
   **Subject:** `Nova poruka sa sajta - {{subject}}`
   
   **Content:**
   ```
   Nova poruka sa SkyClean DRON sajta:
   
   Ime: {{from_name}}
   Email: {{from_email}}
   Naslov: {{subject}}
   
   Poruka:
   {{message}}
   ```

4. U polju **To Email** unesite: `skycleandron@gmail.com`
5. Kliknite **Save**
6. Zapamtite **Template ID** (npr. `template_xyz789`)

## Korak 4: Dobijanje Public Key

1. U levom meniju kliknite na **Account** → **General**
2. Pronađite **Public Key** (npr. `abcdefghijklmnop`)
3. Zapišite ga

## Korak 5: Ažuriranje Konfiguracije

1. Otvorite fajl `emailjs-config.js` u vašem projektu
2. Zamenite vrednosti:

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'VAŠ_PUBLIC_KEY',        // Iz Account -> General
    SERVICE_ID: 'VAŠ_SERVICE_ID',       // Iz Email Services
    TEMPLATE_ID: 'VAŠ_TEMPLATE_ID'      // Iz Email Templates
};
```

**Primer:**
```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'abcdefghijklmnop',
    SERVICE_ID: 'service_abc123',
    TEMPLATE_ID: 'template_xyz789'
};
```

## Korak 6: Testiranje

1. Otvorite vašu web stranicu
2. Idite na kontakt formu
3. Popunite formu i pošaljite poruku
4. Proverite vaš email inbox (skycleandron@gmail.com)
5. Trebalo bi da primite email sa porukom

## Rešavanje Problema

### Problem: "EmailJS nije podešen"
- Proverite da li ste ažurirali sve tri vrednosti u `emailjs-config.js`
- Proverite da li nema grešaka u konzoli preglednika (F12)

### Problem: "Email sending failed"
- Proverite da li je Service ID tačan
- Proverite da li je Template ID tačan
- Proverite da li su sve varijable u template-u ispravne ({{from_name}}, {{from_email}}, itd.)

### Problem: Ne primam emailove
- Proverite spam folder
- Proverite da li je "To Email" u template-u postavljen na skycleandron@gmail.com
- Proverite da li je Gmail service pravilno povezan

## Besplatni Plan

EmailJS besplatni plan uključuje:
- 200 emailova mesečno
- Osnovne funkcionalnosti
- Dovoljno za većinu sajtova

Ako vam treba više, možete nadograditi na plaćeni plan.

## Dodatna Pomoć

Ako imate problema, možete:
1. Proveriti EmailJS dokumentaciju: https://www.emailjs.com/docs/
2. Kontaktirati EmailJS podršku
3. Proveriti konzolu preglednika za detaljne greške (F12 → Console)


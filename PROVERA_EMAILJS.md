# Provera EmailJS Konfiguracije

## Problem: "The service ID not found"

Ova greška znači da Service ID nije tačan ili ne postoji u vašem EmailJS nalogu.

## Kako da proverite i ispravite:

### 1. Proverite Service ID u EmailJS Dashboard-u

1. Idite na https://dashboard.emailjs.com/admin
2. U levom meniju kliknite na **Email Services**
3. Proverite da li postoji service sa ID-jem: `service_yylxlh3`
4. Ako ne postoji ili je drugačiji:
   - Kliknite na vaš service (ili kreirajte novi ako ne postoji)
   - Kopirajte tačan **Service ID** (počinje sa `service_`)
   - Ažurirajte `emailjs-config.js` sa tačnim ID-jem

### 2. Proverite Template ID

1. U EmailJS Dashboard-u idite na **Email Templates**
2. Proverite da li postoji template sa ID-jem: `template_ce0y53m`
3. Ako ne postoji ili je drugačiji:
   - Kliknite na vaš template (ili kreirajte novi)
   - Kopirajte tačan **Template ID** (počinje sa `template_`)
   - Ažurirajte `emailjs-config.js` sa tačnim ID-jem

### 3. Proverite Public Key

1. U EmailJS Dashboard-u idite na **Account** → **General**
2. Proverite **Public Key**
3. Ako je drugačiji od `haQDBn8VisEgJ9CQm`, ažurirajte `emailjs-config.js`

### 4. Ažurirajte emailjs-config.js

Nakon što proverite sve ID-jeve, ažurirajte fajl sa tačnim vrednostima:

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'VAŠ_TAČAN_PUBLIC_KEY',
    SERVICE_ID: 'VAŠ_TAČAN_SERVICE_ID',  // Mora počinjati sa "service_"
    TEMPLATE_ID: 'VAŠ_TAČAN_TEMPLATE_ID' // Mora počinjati sa "template_"
};
```

### 5. Proverite da li je Service aktivan

1. U EmailJS Dashboard-u → **Email Services**
2. Proverite da li je vaš service **Active** (zeleno)
3. Ako nije, kliknite na njega i aktivirajte ga

### 6. Proverite Template parametre

U vašem EmailJS template-u, proverite da li koristite tačno ove nazive varijabli:
- `{{from_name}}`
- `{{from_email}}`
- `{{subject}}`
- `{{message}}`

## Brza provera:

1. Otvorite https://dashboard.emailjs.com/admin
2. Proverite sve tri vrednosti (Public Key, Service ID, Template ID)
3. Kopirajte ih i zamenite u `emailjs-config.js`
4. Osvežite stranicu i probajte ponovo


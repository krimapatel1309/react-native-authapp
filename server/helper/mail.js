const nodemailer = require("nodemailer");

exports.generateOTP = () => {
    let otp = "";
    for (let i = 0; i < 4; i++) {
        const randVal = Math.round(Math.random() * 9);
        otp = otp + randVal;
    }
    return otp;
};

// email config
exports.sendMail = (subject, email, template, para=null) => {
    // console.log(subject);
    const mailtrans = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    mailtrans.sendMail({
        from:process.env.EMAIL,
        to: email,
        subject: subject,
        html:template(para)
    })
}


exports.generateEmailTemplate = (otp) => {
    return `<!DOCTYPE html>

    <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css"/>
    <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css"/>
    <!--<![endif]-->
    <style>
            * {
                box-sizing: border-box;
            }
    
            body {
                margin: 0;
                padding: 0;
            }
    
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: inherit !important;
            }
    
            #MessageViewBody a {
                color: inherit;
                text-decoration: none;
            }
    
            p {
                line-height: inherit
            }
    
            .desktop_hide,
            .desktop_hide table {
                mso-hide: all;
                display: none;
                max-height: 0px;
                overflow: hidden;
            }
    
            @media (max-width:620px) {
    
                .desktop_hide table.icons-inner,
                .social_block.desktop_hide .social-table {
                    display: inline-block !important;
                }
    
                .icons-inner {
                    text-align: center;
                }
    
                .icons-inner td {
                    margin: 0 auto;
                }
    
                .image_block img.big,
                .row-content {
                    width: 100% !important;
                }
    
                .mobile_hide {
                    display: none;
                }
    
                .stack .column {
                    width: 100%;
                    display: block;
                }
    
                .mobile_hide {
                    min-height: 0;
                    max-height: 0;
                    max-width: 0;
                    overflow: hidden;
                    font-size: 0px;
                }
    
                .desktop_hide,
                .desktop_hide table {
                    display: table !important;
                    max-height: none !important;
                }
            }
        </style>
    </head>
    <body style="background-color: #d9dffa; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
    <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #d9dffa;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #cfd6f4;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 20px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
    <div align="center" class="alignment" style="line-height:10px"><img alt="Card Header with Border and Shadow Animated" class="big" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932707/animated_header_d7m9ax.gif" style="display: block; height: auto; border: 0; width: 600px; max-width: 100%;" title="Card Header with Border and Shadow Animated" width="600"/></div>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #d9dffa; background-image: url('https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932708/body_background_2_h5aooe.png'); background-position: top center; background-repeat: repeat;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 50px; padding-right: 50px; vertical-align: top; padding-top: 15px; padding-bottom: 15px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <table border="0" cellpadding="10" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad">
    <div style="font-family: sans-serif">
    <div class="" style="font-size: 14px; mso-line-height-alt: 16.8px; color: #506bec; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
    <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><strong><span style="font-size:38px;">Verify your Email</span></strong></p>
    </div>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="10" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad">
    <div style="font-family: sans-serif">
    <div class="" style="font-size: 14px; mso-line-height-alt: 16.8px; color: #40507a; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
    <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><span style="font-size:16px;">Hey, we received a request to verify your account.</span></p>
    </div>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="10" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad">
    <div style="font-family: sans-serif">
    <div class="" style="font-size: 14px; mso-line-height-alt: 16.8px; color: #40507a; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
    <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><span style="font-size:16px;">Let’s get verify! Enter the below OTP to get your job DONE!</span></p>
    </div>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="button_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:20px;text-align:left;">
    <div align="left" class="alignment">
    <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="/" style="height:46px;width:80px;v-text-anchor:middle;" arcsize="35%" stroke="false" fillcolor="#506bec"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:15px"><![endif]--><div style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#506bec;border-radius:16px;width:auto;border-top:0px solid TRANSPARENT;font-weight:400;border-right:0px solid TRANSPARENT;border-bottom:0px solid TRANSPARENT;border-left:0px solid TRANSPARENT;padding-top:8px;padding-bottom:8px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:25px;padding-right:25px;font-size:15px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word;"><span data-mce-style="" dir="ltr" style="line-height: 30px;"><strong>${otp}</strong></span></span></span></div>
    <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="10" cellspacing="0" class="text_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad">
    <div style="font-family: sans-serif">
    <div class="" style="font-size: 14px; mso-line-height-alt: 16.8px; color: #97a2da; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
    <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">This OTP will expire in the next 24 hours.</p>
    </div>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="10" cellspacing="0" class="text_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad">
    <div style="font-family: sans-serif">
    <div class="" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #97a2da; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
    <p style="margin: 0; font-size: 12px; mso-line-height-alt: 14.399999999999999px;"> </p>
    </div>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="10" cellspacing="0" class="social_block block-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad">
    <div class="alignment" style="text-align:center;">
    <table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="216px">
    <tr>
    <td style="padding:0 5px 0 5px;"><a href="https://www.linkedin.com/in/jaypatel1122" target="_blank"><img alt="LinkedIn" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932707/linkedin2x_bmrkem.png" style="display: block; height: auto; border: 0;" title="LinkedIn" width="32"/></a></td>
    <td style="padding:0 5px 0 5px;"><a href="https://api.whatsapp.com/send?phone=919328473489&text=Heyy%20Jay!%20got%20reference%20from%20AUTHAPP MAIL%F0%9F%98%81" target="_blank"><img alt="WhatsApp" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932705/whatsapp2x_ubhuvb.png" style="display: block; height: auto; border: 0;" title="WhatsApp" width="32"/></a></td>
    <td style="padding:0 5px 0 5px;"><a href="https://instagram.com/__jay.xi" target="_blank"><img alt="Instagram" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932704/instagram2x_vhzh3i.png" style="display: block; height: auto; border: 0;" title="instagram" width="32"/></a></td>
    <td style="padding:0 5px 0 5px;"><a href="mailto:jay64441860@gmail.com" target="_blank"><img alt="E-Mail" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932708/mail2x_cfkuwk.png" style="display: block; height: auto; border: 0;" title="E-Mail" width="32"/></a></td>
    <td style="padding:0 5px 0 5px;"><a href="https://facebook.com/jay.patel.112" target="_blank"><img alt="Facebook" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932704/facebook2x_hp5lhg.png" style="display: block; height: auto; border: 0;" title="Facebook" width="32"/></a></td>
    <td style="padding:0 5px 0 5px;"><a href="https://twitter.com/jaypatel_1510" target="_blank"><img alt="Twitter" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932708/twitter2x_kwtupk.png" style="display: block; height: auto; border: 0;" title="twitter" width="32"/></a></td>
    </tr>
    </table>
    </div>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
    <div align="center" class="alignment" style="line-height:10px"><img alt="Card Bottom with Border and Shadow Image" class="big" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932708/bottom_img_jtshtw.png" style="display: block; height: auto; border: 0; width: 600px; max-width: 100%;" title="Card Bottom with Border and Shadow Image" width="600"/></div>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
    <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="alignment" style="vertical-align: middle; text-align: center;">
    <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
    <!--[if !vml]><!-->
    
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table><!-- End -->
    </body>
    </html>`
}

exports.verifiedEmailTemplate = () => {
    return `<!DOCTYPE html>

    <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
    <title></title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css"/>
    <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css"/>
    <!--<![endif]-->
    <style>
            * {
                box-sizing: border-box;
            }
    
            body {
                margin: 0;
                padding: 0;
            }
    
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: inherit !important;
            }
    
            #MessageViewBody a {
                color: inherit;
                text-decoration: none;
            }
    
            p {
                line-height: inherit
            }
    
            .desktop_hide,
            .desktop_hide table {
                mso-hide: all;
                display: none;
                max-height: 0px;
                overflow: hidden;
            }
    
            @media (max-width:620px) {
    
                .desktop_hide table.icons-inner,
                .social_block.desktop_hide .social-table {
                    display: inline-block !important;
                }
    
                .icons-inner {
                    text-align: center;
                }
    
                .icons-inner td {
                    margin: 0 auto;
                }
    
                .image_block img.big,
                .row-content {
                    width: 100% !important;
                }
    
                .mobile_hide {
                    display: none;
                }
    
                .stack .column {
                    width: 100%;
                    display: block;
                }
    
                .mobile_hide {
                    min-height: 0;
                    max-height: 0;
                    max-width: 0;
                    overflow: hidden;
                    font-size: 0px;
                }
    
                .desktop_hide,
                .desktop_hide table {
                    display: table !important;
                    max-height: none !important;
                }
            }
        </style>
    </head>
    <body style="background-color: #d9dffa; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
    <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #d9dffa;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #cfd6f4;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 20px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
    <div align="center" class="alignment" style="line-height:10px"><img alt="Card Header with Border and Shadow Animated" class="big" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932707/animated_header_d7m9ax.gif" style="display: block; height: auto; border: 0; width: 600px; max-width: 100%;" title="Card Header with Border and Shadow Animated" width="600"/></div>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #d9dffa; background-image: url('https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932708/body_background_2_h5aooe.png'); background-position: top center; background-repeat: repeat;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 50px; padding-right: 50px; vertical-align: top; padding-top: 15px; padding-bottom: 15px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <table border="0" cellpadding="10" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad">
    <div style="font-family: sans-serif">
    <div class="" style="font-size: 14px; mso-line-height-alt: 16.8px; color: #506bec; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
    <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><strong><span style="font-size:38px;">Email Verified</span></strong></p>
    </div>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="10" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad">
    <div style="font-family: sans-serif">
    <div class="" style="font-size: 14px; mso-line-height-alt: 16.8px; color: #40507a; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
    <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><span style="font-size:16px;">Hey, we verified your account successfully.</span></p>
    </div>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="0" cellspacing="0" class="button_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:20px;text-align:left;">
    <div align="left" class="alignment">
    <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="/" style="height:46px;width:202px;v-text-anchor:middle;" arcsize="35%" stroke="false" fillcolor="#506bec"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:15px"><![endif]--><div style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#506bec;border-radius:16px;width:auto;border-top:0px solid TRANSPARENT;font-weight:400;border-right:0px solid TRANSPARENT;border-bottom:0px solid TRANSPARENT;border-left:0px solid TRANSPARENT;padding-top:8px;padding-bottom:8px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:25px;padding-right:25px;font-size:15px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word;"><span data-mce-style="" dir="ltr" style="line-height: 30px;"><strong>VERIFICATION DONE</strong></span></span></span></div>
    <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
    <tr>
    <td class="pad">
    <div style="font-family: sans-serif">
    <div class="" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #97a2da; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
    <p style="margin: 0; font-size: 12px; mso-line-height-alt: 14.399999999999999px;"> </p>
    </div>
    </div>
    </td>
    </tr>
    </table>
    <table border="0" cellpadding="10" cellspacing="0" class="social_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad">
    <div class="alignment" style="text-align:center;">
    <table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="216px">
    <tr>
    <td style="padding:0 5px 0 5px;"><a href="https://www.linkedin.com/in/jaypatel1122" target="_blank"><img alt="LinkedIn" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932707/linkedin2x_bmrkem.png" style="display: block; height: auto; border: 0;" title="LinkedIn" width="32"/></a></td>
    <td style="padding:0 5px 0 5px;"><a href="https://api.whatsapp.com/send?phone=919328473489&text=Heyy%20Jay!%20got%20reference%20from%20AUTHAPP MAIL%F0%9F%98%81" target="_blank"><img alt="WhatsApp" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932705/whatsapp2x_ubhuvb.png" style="display: block; height: auto; border: 0;" title="WhatsApp" width="32"/></a></td>
    <td style="padding:0 5px 0 5px;"><a href="https://instagram.com/__jay.xi" target="_blank"><img alt="Instagram" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932704/instagram2x_vhzh3i.png" style="display: block; height: auto; border: 0;" title="instagram" width="32"/></a></td>
    <td style="padding:0 5px 0 5px;"><a href="mailto:jay64441860@gmail.com" target="_blank"><img alt="E-Mail" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932708/mail2x_cfkuwk.png" style="display: block; height: auto; border: 0;" title="E-Mail" width="32"/></a></td>
    <td style="padding:0 5px 0 5px;"><a href="https://facebook.com/jay.patel.112" target="_blank"><img alt="Facebook" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932704/facebook2x_hp5lhg.png" style="display: block; height: auto; border: 0;" title="Facebook" width="32"/></a></td>
    <td style="padding:0 5px 0 5px;"><a href="https://twitter.com/jaypatel_1510" target="_blank"><img alt="Twitter" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932708/twitter2x_kwtupk.png" style="display: block; height: auto; border: 0;" title="twitter" width="32"/></a></td>
    </tr>
    </table>
    </div>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
    <div align="center" class="alignment" style="line-height:10px"><img alt="Card Bottom with Border and Shadow Image" class="big" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932708/bottom_img_jtshtw.png" style="display: block; height: auto; border: 0; width: 600px; max-width: 100%;" title="Card Bottom with Border and Shadow Image" width="600"/></div>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tbody>
    <tr>
    <td>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
    <tbody>
    <tr>
    <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
    <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
    <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
    <tr>
    <td class="alignment" style="vertical-align: middle; text-align: center;">
    <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
    <!--[if !vml]><!-->
    
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table>
    </td>
    </tr>
    </tbody>
    </table><!-- End -->
    </body>
    </html>`
}

exports.generatePasswordResetTemplate = (url) => {
  return `<!DOCTYPE html>

  <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
  <head>
  <title></title>
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css"/>
  <!--<![endif]-->
  <style>
          * {
              box-sizing: border-box;
          }
  
          body {
              margin: 0;
              padding: 0;
          }
  
          a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
          }
  
          #MessageViewBody a {
              color: inherit;
              text-decoration: none;
          }
  
          p {
              line-height: inherit
          }
  
          .desktop_hide,
          .desktop_hide table {
              mso-hide: all;
              display: none;
              max-height: 0px;
              overflow: hidden;
          }
  
          @media (max-width:620px) {
  
              .desktop_hide table.icons-inner,
              .social_block.desktop_hide .social-table {
                  display: inline-block !important;
              }
  
              .icons-inner {
                  text-align: center;
              }
  
              .icons-inner td {
                  margin: 0 auto;
              }
  
              .image_block img.big,
              .row-content {
                  width: 100% !important;
              }
  
              .mobile_hide {
                  display: none;
              }
  
              .stack .column {
                  width: 100%;
                  display: block;
              }
  
              .mobile_hide {
                  min-height: 0;
                  max-height: 0;
                  max-width: 0;
                  overflow: hidden;
                  font-size: 0px;
              }
  
              .desktop_hide,
              .desktop_hide table {
                  display: table !important;
                  max-height: none !important;
              }
          }
      </style>
  </head>
  <body style="background-color: #d9dffa; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
  <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #d9dffa;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #cfd6f4;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 20px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
  <div align="center" class="alignment" style="line-height:10px"><img alt="Card Header with Border and Shadow Animated" class="big" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932707/animated_header_d7m9ax.gif" style="display: block; height: auto; border: 0; width: 600px; max-width: 100%;" title="Card Header with Border and Shadow Animated" width="600"/></div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #d9dffa; background-image: url('https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932708/body_background_2_h5aooe.png'); background-position: top center; background-repeat: repeat;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 50px; padding-right: 50px; vertical-align: top; padding-top: 15px; padding-bottom: 15px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 14px; mso-line-height-alt: 16.8px; color: #506bec; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
  <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><strong><span style="font-size:38px;">Forgot your password?</span></strong></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 14px; mso-line-height-alt: 16.8px; color: #40507a; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
  <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><span style="font-size:16px;">Hey, we received a request to reset your password.</span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 14px; mso-line-height-alt: 16.8px; color: #40507a; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
  <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><span style="font-size:16px;">Let’s get you a new one!</span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="button_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:20px;text-align:left;">
  <div align="left" class="alignment">
  <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="/" style="height:46px;width:212px;v-text-anchor:middle;" arcsize="35%" stroke="false" fillcolor="#506bec"><w:anchorlock/><v:textbox inset="5px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:15px"><![endif]--><a href="${url}" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#506bec;border-radius:16px;width:auto;border-top:0px solid TRANSPARENT;font-weight:undefined;border-right:0px solid TRANSPARENT;border-bottom:0px solid TRANSPARENT;border-left:0px solid TRANSPARENT;padding-top:8px;padding-bottom:8px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:25px;padding-right:20px;font-size:15px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word;"><span data-mce-style="" style="line-height: 30px;"><strong>RESET MY PASSWORD</strong></span></span></span></a>
  <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 14px; mso-line-height-alt: 16.8px; color: #97a2da; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
  <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;">This link will expire in the next 24 hours.</p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #97a2da; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
  <p style="margin: 0; font-size: 12px; mso-line-height-alt: 14.399999999999999px;"> </p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 14px; mso-line-height-alt: 16.8px; color: #40507a; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
  <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;">Didn’t request a password reset? You can ignore this message.</p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="10" cellspacing="0" class="social_block block-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad">
  <div class="alignment" style="text-align:center;">
  <table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="216px">
  <tr>
  <td style="padding:0 5px 0 5px;"><a href="https://www.linkedin.com/in/jaypatel1122" target="_blank"><img alt="LinkedIn" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932707/linkedin2x_bmrkem.png" style="display: block; height: auto; border: 0;" title="LinkedIn" width="32"/></a></td>
  <td style="padding:0 5px 0 5px;"><a href="https://api.whatsapp.com/send?phone=919328473489&text=Heyy%20Jay!%20got%20reference%20from%20AUTHAPP MAIL%F0%9F%98%81" target="_blank"><img alt="WhatsApp" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932705/whatsapp2x_ubhuvb.png" style="display: block; height: auto; border: 0;" title="WhatsApp" width="32"/></a></td>
  <td style="padding:0 5px 0 5px;"><a href="https://instagram.com/__jay.xi" target="_blank"><img alt="Instagram" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932704/instagram2x_vhzh3i.png" style="display: block; height: auto; border: 0;" title="instagram" width="32"/></a></td>
  <td style="padding:0 5px 0 5px;"><a href="mailto:jay64441860@gmail.com" target="_blank"><img alt="E-Mail" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932708/mail2x_cfkuwk.png" style="display: block; height: auto; border: 0;" title="E-Mail" width="32"/></a></td>
  <td style="padding:0 5px 0 5px;"><a href="https://facebook.com/jay.patel.112" target="_blank"><img alt="Facebook" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932704/facebook2x_hp5lhg.png" style="display: block; height: auto; border: 0;" title="Facebook" width="32"/></a></td>
  <td style="padding:0 5px 0 5px;"><a href="https://twitter.com/jaypatel_1510" target="_blank"><img alt="Twitter" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932708/twitter2x_kwtupk.png" style="display: block; height: auto; border: 0;" title="twitter" width="32"/></a></td>
  </tr>
  </table>
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
  <div align="center" class="alignment" style="line-height:10px"><img alt="Card Bottom with Border and Shadow Image" class="big" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932708/bottom_img_jtshtw.png" style="display: block; height: auto; border: 0; width: 600px; max-width: 100%;" title="Card Bottom with Border and Shadow Image" width="600"/></div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
  <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="alignment" style="vertical-align: middle; text-align: center;">
  <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
  <!--[if !vml]><!-->
  
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table><!-- End -->
  </body>
  </html>`
}

exports.verifiedPasswordTemplate = () => {
  return `<!DOCTYPE html>

  <html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
  <head>
  <title></title>
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css"/>
  <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css"/>
  <!--<![endif]-->
  <style>
          * {
              box-sizing: border-box;
          }
  
          body {
              margin: 0;
              padding: 0;
          }
  
          a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
          }
  
          #MessageViewBody a {
              color: inherit;
              text-decoration: none;
          }
  
          p {
              line-height: inherit
          }
  
          .desktop_hide,
          .desktop_hide table {
              mso-hide: all;
              display: none;
              max-height: 0px;
              overflow: hidden;
          }
  
          @media (max-width:620px) {
  
              .desktop_hide table.icons-inner,
              .social_block.desktop_hide .social-table {
                  display: inline-block !important;
              }
  
              .icons-inner {
                  text-align: center;
              }
  
              .icons-inner td {
                  margin: 0 auto;
              }
  
              .image_block img.big,
              .row-content {
                  width: 100% !important;
              }
  
              .mobile_hide {
                  display: none;
              }
  
              .stack .column {
                  width: 100%;
                  display: block;
              }
  
              .mobile_hide {
                  min-height: 0;
                  max-height: 0;
                  max-width: 0;
                  overflow: hidden;
                  font-size: 0px;
              }
  
              .desktop_hide,
              .desktop_hide table {
                  display: table !important;
                  max-height: none !important;
              }
          }
      </style>
  </head>
  <body style="background-color: #d9dffa; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
  <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #d9dffa;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #cfd6f4;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 20px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
  <div align="center" class="alignment" style="line-height:10px"><img alt="Card Header with Border and Shadow Animated" class="big" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932707/animated_header_d7m9ax.gif" style="display: block; height: auto; border: 0; width: 600px; max-width: 100%;" title="Card Header with Border and Shadow Animated" width="600"/></div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #d9dffa; background-image: url('https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932708/body_background_2_h5aooe.png'); background-position: top center; background-repeat: repeat;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 50px; padding-right: 50px; vertical-align: top; padding-top: 15px; padding-bottom: 15px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 14px; mso-line-height-alt: 16.8px; color: #506bec; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
  <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><strong><span style="font-size:38px;">Password Changed</span></strong></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 14px; mso-line-height-alt: 16.8px; color: #40507a; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
  <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><span style="font-size:16px;">Hey, we changed your account Password successfully.</span></p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0" class="button_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="padding-bottom:20px;padding-left:10px;padding-right:10px;padding-top:20px;text-align:left;">
  <div align="left" class="alignment">
  <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="/" style="height:46px;width:212px;v-text-anchor:middle;" arcsize="35%" stroke="false" fillcolor="#506bec"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:15px"><![endif]--><div style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#506bec;border-radius:16px;width:auto;border-top:0px solid TRANSPARENT;font-weight:400;border-right:0px solid TRANSPARENT;border-bottom:0px solid TRANSPARENT;border-left:0px solid TRANSPARENT;padding-top:8px;padding-bottom:8px;font-family:Helvetica Neue, Helvetica, Arial, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:25px;padding-right:25px;font-size:15px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word;"><span data-mce-style="" dir="ltr" style="line-height: 30px;"><strong>PASSWORD UPDATED</strong></span></span></span></div>
  <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="10" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
  <tr>
  <td class="pad">
  <div style="font-family: sans-serif">
  <div class="" style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #97a2da; line-height: 1.2; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;">
  <p style="margin: 0; font-size: 12px; mso-line-height-alt: 14.399999999999999px;"> </p>
  </div>
  </div>
  </td>
  </tr>
  </table>
  <table border="0" cellpadding="10" cellspacing="0" class="social_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad">
  <div class="alignment" style="text-align:center;">
  <table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="216px">
  <tr>
  <td style="padding:0 5px 0 5px;"><a href="https://www.linkedin.com/in/jaypatel1122" target="_blank"><img alt="LinkedIn" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932707/linkedin2x_bmrkem.png" style="display: block; height: auto; border: 0;" title="LinkedIn" width="32"/></a></td>
  <td style="padding:0 5px 0 5px;"><a href="https://api.whatsapp.com/send?phone=919328473489&text=Heyy%20Jay!%20got%20reference%20from%20AUTHAPP MAIL%F0%9F%98%81" target="_blank"><img alt="WhatsApp" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932705/whatsapp2x_ubhuvb.png" style="display: block; height: auto; border: 0;" title="WhatsApp" width="32"/></a></td>
  <td style="padding:0 5px 0 5px;"><a href="https://instagram.com/__jay.xi" target="_blank"><img alt="Instagram" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932704/instagram2x_vhzh3i.png" style="display: block; height: auto; border: 0;" title="instagram" width="32"/></a></td>
  <td style="padding:0 5px 0 5px;"><a href="mailto:jay64441860@gmail.com" target="_blank"><img alt="E-Mail" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932708/mail2x_cfkuwk.png" style="display: block; height: auto; border: 0;" title="E-Mail" width="32"/></a></td>
  <td style="padding:0 5px 0 5px;"><a href="https://facebook.com/jay.patel.112" target="_blank"><img alt="Facebook" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932704/facebook2x_hp5lhg.png" style="display: block; height: auto; border: 0;" title="Facebook" width="32"/></a></td>
  <td style="padding:0 5px 0 5px;"><a href="https://twitter.com/jaypatel_1510" target="_blank"><img alt="Twitter" height="32" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932708/twitter2x_kwtupk.png" style="display: block; height: auto; border: 0;" title="twitter" width="32"/></a></td>
  </tr>
  </table>
  </div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
  <div align="center" class="alignment" style="line-height:10px"><img alt="Card Bottom with Border and Shadow Image" class="big" src="https://res.cloudinary.com/djuf0cyrk/image/upload/v1666932708/bottom_img_jtshtw.png" style="display: block; height: auto; border: 0; width: 600px; max-width: 100%;" title="Card Bottom with Border and Shadow Image" width="600"/></div>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tbody>
  <tr>
  <td>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 600px;" width="600">
  <tbody>
  <tr>
  <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
  <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
  <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
  <tr>
  <td class="alignment" style="vertical-align: middle; text-align: center;">
  <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
  <!--[if !vml]><!-->
  
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table>
  </td>
  </tr>
  </tbody>
  </table><!-- End -->
  </body>
  </html>`
}
import nodemailer from "nodemailer";

// ! не удалять email, он используется в компоненте
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const {
        name,
        phone,
        email,
        message,
        product
    } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: "hello@primafinestra.ru",
            pass: "NGuX2VgX5ViMK8izrGCa",
        },
    });

    try {
        const emailRes = await transporter.sendMail({
            from: 'Сообщение с сайта "PRIMAFINESTRA" <hello@primafinestra.ru>',
            // to: "mail@bim-cleaning.ru, beliy.bim039@yandex.ru",
            to: "konstantinachapin@mail.ru", // Заменить!
            subject: `Сообщение от клиента`,
            html: `
      <div style="color: #444; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.5; margin: 0;">
  <table
      class="m_8718936357472974987wrapper-table"
      cellpadding="5"
      cellspacing="0"
      width="100%"
      border="0"
      style="border-collapse: collapse; font-size: 16px; line-height: 1.5; background-color: #eee; background-repeat: no-repeat; background-position: left top;"
      bgcolor="#eeeeee"
  >
      <tbody>
          <tr style="border-color: transparent;">
              <td align="center" style="border-collapse: collapse; border-color: transparent;">
                  <table cellpadding="0" cellspacing="0" width="600px" id="m_8718936357472974987bodyTable" border="0" bgcolor="#ffffff" style="border-collapse: collapse; font-size: 16px; line-height: 1.5;">
                      <tbody>
                          <tr style="border-color: transparent;">
                              <td border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-color: transparent;">
                                  <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 16px; line-height: 1.5; width: 100%;" border="0" width="100%">
                                      <tbody>
                                          <tr style="border-color: transparent;">
                                              <th
                                                  width="600"
                                                  style="border-color: transparent; font-weight: normal; text-align: left; vertical-align: top;"
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  class="m_8718936357472974987tc"
                                                  align="left"
                                                  valign="top"
                                              >
                                                  <table border="0" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 16px; line-height: 1.5; background-color: #eee;" bgcolor="#eeeeee">
                                                      <tbody>
                                                          <tr style="border-color: transparent;">
                                                              <td cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-color: transparent;">
                                                                  <table
                                                                      width="100%"
                                                                      cellpadding="0"
                                                                      cellspacing="0"
                                                                      style="border-collapse: collapse; font-size: 16px; line-height: 1.5; padding-left: 0; padding-right: 0; padding-top: 0; padding-bottom: 0; height: 20px;"
                                                                      height="20"
                                                                  >
                                                                      <tbody>
                                                                          <tr style="border-color: transparent;">
                                                                              <td height="20" style="border-collapse: collapse; border-color: transparent;"></td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                              </th>
                                          </tr>
                                      </tbody>
                                  </table>
                                  <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 16px; line-height: 1.5; width: 100%;" border="0" width="100%">
                                      <tbody>
                                          <tr style="border-color: transparent;">
                                              <th
                                                  width="600"
                                                  style="border-color: transparent; font-weight: normal; text-align: left; vertical-align: top;"
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  class="m_8718936357472974987tc"
                                                  align="left"
                                                  valign="top"
                                              >
                                                  <table border="0" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 16px; line-height: 1.5; background-color: #fff;" bgcolor="#ffffff">
                                                      <tbody>
                                                          <tr style="border-color: transparent;">
                                                              <td cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-color: transparent;">
                                                                  <table width="100%" cellpadding="0" cellspacing="0" id="m_8718936357472974987wout_block_4_element_0" style="border-collapse: collapse; font-size: 16px; line-height: 1.5;">
                                                                      <tbody>
                                                                          <tr style="border-color: transparent; color: #444; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">
                                                                              <td
                                                                                  class="m_8718936357472974987content-cell m_8718936357472974987padding-lr-0 m_8718936357472974987padding-top-0 m_8718936357472974987padding-bottom-0"
                                                                                  width="600"
                                                                                  style="border-collapse: collapse; border-color: transparent; vertical-align: top; padding-left: 0; padding-right: 0; padding-top: 0; padding-bottom: 0;"
                                                                                  valign="top"
                                                                              >
                                                                                  <div
                                                                                      id="m_8718936357472974987wout_block_4_element_0"
                                                                                      style="font-size: 16px; line-height: 1.5; width: 100%; height: 293; display: block;"
                                                                                      width="100%"
                                                                                      height="293"
                                                                                  >
                                                                                      <img
                                                                                          border="0"
                                                                                          width="600"
                                                                                          height="auto"
                                                                                          class="m_8718936357472974987sp-img CToWUd a6T"
                                                                                          align="left"
                                                                                          alt="454_3"
                                                                                          src="https://i.ibb.co/GQfppXF/2c0780f0cc93bd3cbe39d416fa0f69c7.jpg"
                                                                                          style="border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; margin: 0; display: block;"
                                                                                          tabindex="0"
                                                                                      />
                                                                                      <div class="a6S" dir="ltr" style="opacity: 0.01; left: 1326px; top: 281px;">
                                                                                          <div id=":p1" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" title="Скачать" role="button" tabindex="0" aria-label="Скачать файл " data-tooltip-class="a1V">
                                                                                              <div class="akn">
                                                                                                  <div class="aSK J-J5-Ji aYr"></div>
                                                                                              </div>
                                                                                          </div>
                                                                                      </div>
                                                                                  </div>
                                                                                  <div style="font-size: 16px; line-height: 1.5; clear: both;"></div>
                                                                              </td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  <table border="0" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 16px; line-height: 1.5; background-color: #fff;" bgcolor="#ffffff">
                                                      <tbody>
                                                          <tr style="border-color: transparent;">
                                                              <td cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-color: transparent;">
                                                                  <table
                                                                      width="100%"
                                                                      cellpadding="0"
                                                                      cellspacing="0"
                                                                      id="m_8718936357472974987wout_block_out_block_5"
                                                                      style="border-collapse: collapse; font-size: 16px; line-height: 1.5; font-weight: normal; margin: 0;"
                                                                  >
                                                                      <tbody>
                                                                          <tr style="border-color: transparent; color: #444; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">
                                                                              <td
                                                                                  class="m_8718936357472974987content-cell m_8718936357472974987padding-bottom-0"
                                                                                  width="540"
                                                                                  style="
                                                                              border-collapse: collapse;
                                                                              border-color: transparent;
                                                                              vertical-align: top;
                                                                              padding-left: 30px;
                                                                              padding-right: 30px;
                                                                              padding-top: 20px;
                                                                              padding-bottom: 0;
                                                                          "
                                                                                  valign="top"
                                                                              >
                                                                                  <h4
                                                                                      style="
                                                                                  line-height: 1.2;
                                                                                  margin: 0 0 10px 0;
                                                                                  font-weight: normal;
                                                                                  font-size: 20px;
                                                                                  color: #444;
                                                                                  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
                                                                              "
                                                                                  >
                                                                                      <strong>Пришло сообщение с сайта!</strong>
                                                                                  </h4>
                                                                                  <p
                                                                                      style="
                                                                                  font-size: inherit;
                                                                                  line-height: inherit;
                                                                                  margin: 0 0 20px 0;
                                                                                  color: inherit;
                                                                                  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
                                                                                  font-weight: normal;
                                                                                  padding: 0;
                                                                              "
                                                                                  >
                                                                                      <span>
                                                                                          Вам написал клиент, свяжитесь с ним как можно быстрее!
                                                                                      </span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="
                                                                                  font-size: inherit;
                                                                                  line-height: inherit;
                                                                                  margin: 0 0 10px 0;
                                                                                  color: inherit;
                                                                                  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
                                                                                  font-weight: normal;
                                                                                  padding: 0;
                                                                              "
                                                                                  >
                                                                                      <span style="font-size: 16px;"><strong>Данные клиента:</strong></span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="
                                                                                  font-size: inherit;
                                                                                  line-height: inherit;
                                                                                  margin: 0 0 10px 0;
                                                                                  color: inherit;
                                                                                  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
                                                                                  font-weight: normal;
                                                                                  padding: 0;
                                                                              "
                                                                                  >
                                                                                      Имя: ${name}
                                                                                  </p>
                                                                                  ${phone && `
                                                                                  <p
                                                                                      style="
                                                                                  font-size: inherit;
                                                                                  line-height: inherit;
                                                                                  margin: 0 0 10px 0;
                                                                                  color: inherit;
                                                                                  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
                                                                                  font-weight: normal;
                                                                                  padding: 0;
                                                                              "
                                                                                  >
                                                                                      Телефон: ${phone}
                                                                                  </p>
                                                                                  `}
                                                                                  <p
                                                                                      style="
                                                                                  font-size: inherit;
                                                                                  line-height: inherit;
                                                                                  margin: 0 0 10px 0;
                                                                                  color: inherit;
                                                                                  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
                                                                                  font-weight: normal;
                                                                                  padding: 0;
                                                                              "
                                                                                  >
                                                                                      Email: ${email ? email : "Не заполнено"}
                                                                                  </p>
                                                                                  <p
                                                                                      style="
                                                                                  font-size: inherit;
                                                                                  line-height: inherit;
                                                                                  margin: 0 0 10px 0;
                                                                                  color: inherit;
                                                                                  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
                                                                                  font-weight: normal;
                                                                                  padding: 0;
                                                                              "
                                                                                  >
                                                                                      Сообщение: ${message ? message : "Не заполнено"}
                                                                                  </p>
                                                                                  <p
                                                                                      style="
                                                                                  font-size: inherit;
                                                                                  line-height: inherit;
                                                                                  margin: 0 0 10px 0;
                                                                                  color: inherit;
                                                                                  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
                                                                                  font-weight: normal;
                                                                                  padding: 0;
                                                                              "
                                                                                  >
                                                                                      Товар: ${product ? product : "Не выбран"}
                                                                                  </p>
                                                                              </td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>

                                              </th>
                                          </tr>
                                      </tbody>
                                  </table>
                                  <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 16px; line-height: 1.5; width: 100%;" border="0" width="100%">
                                      <tbody>
                                          <tr style="border-color: transparent;">
                                              <th
                                                  width="600"
                                                  style="border-color: transparent; font-weight: normal; text-align: left; vertical-align: top;"
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  class="m_8718936357472974987tc"
                                                  align="left"
                                                  valign="top"
                                              >
                                                  <table border="0" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 16px; line-height: 1.5; background-color: #fff;" bgcolor="#ffffff">
                                                      <tbody>
                                                          <tr style="border-color: transparent;">
                                                              <td cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-color: transparent;">
                                                                  <div
                                                                      class="m_8718936357472974987block-divider"
                                                                      style="font-size: 16px; line-height: 1.5; padding-left: 15px; padding-right: 15px; padding-top: 15px; padding-bottom: 15px;"
                                                                  >
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  <table border="0" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 16px; line-height: 1.5; background-color: #eee;" bgcolor="#eeeeee">
                                                      <tbody>
                                                          <tr style="border-color: transparent;">
                                                              <td cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-color: transparent;">
                                                                  <table
                                                                      width="100%"
                                                                      cellpadding="0"
                                                                      cellspacing="0"
                                                                      id="m_8718936357472974987wout_block_out_block_8"
                                                                      style="border-collapse: collapse; font-size: 16px; line-height: 1.5; font-weight: normal; margin: 0;"
                                                                  >
                                                                      <tbody>
                                                                          <tr style="border-color: transparent; color: #444; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">
                                                                              <td
                                                                                  class="m_8718936357472974987content-cell m_8718936357472974987padding-top-0 m_8718936357472974987padding-bottom-0"
                                                                                  width="540"
                                                                                  style="
                                                                              border-collapse: collapse;
                                                                              border-color: transparent;
                                                                              vertical-align: top;
                                                                              padding-left: 30px;
                                                                              padding-right: 30px;
                                                                              padding-top: 15px;
                                                                              padding-bottom: 0;
                                                                          "
                                                                                  valign="top"
                                                                              >
                                                                                  <p
                                                                                      style="
                                                                                  font-size: inherit;
                                                                                  line-height: inherit;
                                                                                  margin: 0 0 10px 0;
                                                                                  color: inherit;
                                                                                  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
                                                                                  text-align: center;
                                                                                  font-weight: normal;
                                                                                  padding: 0;
                                                                              "
                                                                                      align="center"
                                                                                  >
                                                                                      <span style="font-size: 13px; line-height: 19.5px;">PRIMAFINESTA - эксперты в кровле © 2023</span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="
                                                                                  font-size: inherit;
                                                                                  line-height: inherit;
                                                                                  margin: 0 0 10px 0;
                                                                                  color: inherit;
                                                                                  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
                                                                                  text-align: center;
                                                                                  font-weight: normal;
                                                                                  padding: 0;
                                                                              "
                                                                                      align="center"
                                                                                  >
                                                                                      <span style="font-size: 13px; line-height: 19.5px;">По возникшим вопросам вы можете обращаться по телефону: +7 (905) 244-55-77</span>
                                                                                  </p>
                                                                                  <div style="font-size: 16px; line-height: 1.5; clear: both;"></div>
                                                                              </td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                                  <table border="0" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 16px; line-height: 1.5; background-color: #eee;" bgcolor="#eeeeee">
                                                      <tbody>
                                                          <tr style="border-color: transparent;">
                                                              <td cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-color: transparent;">
                                                                  <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 16px; line-height: 1.5; text-align: center;" align="center">
                                                                      <tbody>
                                                                          <tr style="border-color: transparent; color: #444; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">
                                                                              <td
                                                                                  class="m_8718936357472974987content-cell m_8718936357472974987padding-top-0"
                                                                                  width="540"
                                                                                  style="
                                                                              border-collapse: collapse;
                                                                              border-color: transparent;
                                                                              vertical-align: top;
                                                                              padding-left: 30px;
                                                                              padding-right: 30px;
                                                                              padding-top: 0;
                                                                              padding-bottom: 25px;
                                                                          "
                                                                                  valign="top"
                                                                              >
                                                                              </td>
                                                                          </tr>
                                                                      </tbody>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </tbody>
                                                  </table>
                                              </th>
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
  </table>
</div>`})

            // const emailUserRes = await transporter.sendMail({
            //   from: 'Сообщение с сайта "Правосознание" <hello@pravo-zn.ru>',
            //   to: `${ email }`,
            //   subject: `Ваше сообщение успешно доставлено!`,
            //   html: `< div style = "color: #444; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.5; margin: 0;" >
            //   <table
            //       class="m_8718936357472974987wrapper-table"
            //       cellpadding="5"
            //       cellspacing="0"
            //       width="100%"
            //       border="0"
            //       style="border-collapse: collapse; font-size: 16px; line-height: 1.5; background-color: #eee; background-repeat: no-repeat; background-position: left top;"
            //       bgcolor="#eeeeee"
            //   >
            //       <tbody>
            //           <tr style="border-color: transparent;">
            //               <td align="center" style="border-collapse: collapse; border-color: transparent;">
            //                   <table cellpadding="0" cellspacing="0" width="600px" id="m_8718936357472974987bodyTable" border="0" bgcolor="#ffffff" style="border-collapse: collapse; font-size: 16px; line-height: 1.5;">
            //                       <tbody>
            //                           <tr style="border-color: transparent;">
            //                               <td border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-color: transparent;">
            //                                   <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 16px; line-height: 1.5; width: 100%;" border="0" width="100%">
            //                                       <tbody>
            //                                           <tr style="border-color: transparent;">
            //                                               <th
            //                                                   width="600"
            //                                                   style="border-color: transparent; font-weight: normal; text-align: left; vertical-align: top;"
            //                                                   cellpadding="0"
            //                                                   cellspacing="0"
            //                                                   class="m_8718936357472974987tc"
            //                                                   align="left"
            //                                                   valign="top"
            //                                               >
            //                                                   <table border="0" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 16px; line-height: 1.5; background-color: #eee;" bgcolor="#eeeeee">
            //                                                       <tbody>
            //                                                           <tr style="border-color: transparent;">
            //                                                               <td cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-color: transparent;">
            //                                                                   <table
            //                                                                       width="100%"
            //                                                                       cellpadding="0"
            //                                                                       cellspacing="0"
            //                                                                       style="border-collapse: collapse; font-size: 16px; line-height: 1.5; padding-left: 0; padding-right: 0; padding-top: 0; padding-bottom: 0; height: 20px;"
            //                                                                       height="20"
            //                                                                   >
            //                                                                       <tbody>
            //                                                                           <tr style="border-color: transparent;">
            //                                                                               <td height="20" style="border-collapse: collapse; border-color: transparent;"></td>
            //                                                                           </tr>
            //                                                                       </tbody>
            //                                                                   </table>
            //                                                               </td>
            //                                                           </tr>
            //                                                       </tbody>
            //                                                   </table>
            //                                               </th>
            //                                           </tr>
            //                                       </tbody>
            //                                   </table>
            //                                   <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 16px; line-height: 1.5; width: 100%;" border="0" width="100%">
            //                                       <tbody>
            //                                           <tr style="border-color: transparent;">
            //                                               <th
            //                                                   width="600"
            //                                                   style="border-color: transparent; font-weight: normal; text-align: left; vertical-align: top;"
            //                                                   cellpadding="0"
            //                                                   cellspacing="0"
            //                                                   class="m_8718936357472974987tc"
            //                                                   align="left"
            //                                                   valign="top"
            //                                               >
            //                                                   <table border="0" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 16px; line-height: 1.5; background-color: #fff;" bgcolor="#ffffff">
            //                                                       <tbody>
            //                                                           <tr style="border-color: transparent;">
            //                                                               <td cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-color: transparent;">
            //                                                                   <table width="100%" cellpadding="0" cellspacing="0" id="m_8718936357472974987wout_block_4_element_0" style="border-collapse: collapse; font-size: 16px; line-height: 1.5;">
            //                                                                       <tbody>
            //                                                                           <tr style="border-color: transparent; color: #444; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">
            //                                                                               <td
            //                                                                                   class="m_8718936357472974987content-cell m_8718936357472974987padding-lr-0 m_8718936357472974987padding-top-0 m_8718936357472974987padding-bottom-0"
            //                                                                                   width="600"
            //                                                                                   style="border-collapse: collapse; border-color: transparent; vertical-align: top; padding-left: 0; padding-right: 0; padding-top: 0; padding-bottom: 0;"
            //                                                                                   valign="top"
            //                                                                               >
            //                                                                                   <div
            //                                                                                       id="m_8718936357472974987wout_block_4_element_0"
            //                                                                                       style="font-size: 16px; line-height: 1.5; width: 100%; height: 293; display: block;"
            //                                                                                       width="100%"
            //                                                                                       height="293"
            //                                                                                   >
            //                                                                                       <img
            //                                                                                           border="0"
            //                                                                                           width="600"
            //                                                                                           height="auto"
            //                                                                                           class="m_8718936357472974987sp-img CToWUd a6T"
            //                                                                                           align="left"
            //                                                                                           alt="454_3"
            //                                                                                           src="https://i.ibb.co/qM1Gz3D/image-2.jpg"
            //                                                                                           style="border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; margin: 0; display: block;"
            //                                                                                           tabindex="0"
            //                                                                                       />
            //                                                                                       <div class="a6S" dir="ltr" style="opacity: 0.01; left: 1326px; top: 281px;">
            //                                                                                           <div id=":p1" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" title="Скачать" role="button" tabindex="0" aria-label="Скачать файл " data-tooltip-class="a1V">
            //                                                                                               <div class="akn">
            //                                                                                                   <div class="aSK J-J5-Ji aYr"></div>
            //                                                                                               </div>
            //                                                                                           </div>
            //                                                                                       </div>
            //                                                                                   </div>
            //                                                                                   <div style="font-size: 16px; line-height: 1.5; clear: both;"></div>
            //                                                                               </td>
            //                                                                           </tr>
            //                                                                       </tbody>
            //                                                                   </table>
            //                                                               </td>
            //                                                           </tr>
            //                                                       </tbody>
            //                                                   </table>
            //                                                   <table border="0" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 16px; line-height: 1.5; background-color: #fff;" bgcolor="#ffffff">
            //                                                       <tbody>
            //                                                           <tr style="border-color: transparent;">
            //                                                               <td cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-color: transparent;">
            //                                                                   <table
            //                                                                       width="100%"
            //                                                                       cellpadding="0"
            //                                                                       cellspacing="0"
            //                                                                       id="m_8718936357472974987wout_block_out_block_5"
            //                                                                       style="border-collapse: collapse; font-size: 16px; line-height: 1.5; font-weight: normal; margin: 0;"
            //                                                                   >
            //                                                                       <tbody>
            //                                                                           <tr style="border-color: transparent; color: #444; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">
            //                                                                               <td
            //                                                                                   class="m_8718936357472974987content-cell m_8718936357472974987padding-bottom-0"
            //                                                                                   width="540"
            //                                                                                   style="
            //                                                                               border-collapse: collapse;
            //                                                                               border-color: transparent;
            //                                                                               vertical-align: top;
            //                                                                               padding-left: 30px;
            //                                                                               padding-right: 30px;
            //                                                                               padding-top: 20px;
            //                                                                               padding-bottom: 0;
            //                                                                           "
            //                                                                                   valign="top"
            //                                                                               >
            //                                                                                   <h4
            //                                                                                       style="
            //                                                                                   line-height: 1.2;
            //                                                                                   margin: 0 0 20px 0;
            //                                                                                   font-weight: normal;
            //                                                                                   font-size: 20px;
            //                                                                                   color: #444;
            //                                                                                   font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
            //                                                                               "
            //                                                                                   >
            //                                                                                       <strong>Здравствуйте ${name}, сообщение получено!</strong>
            //                                                                                   </h4>
            //                                                                                   <p
            //                                                                                       style="
            //                                                                                   font-size: inherit;
            //                                                                                   line-height: inherit;
            //                                                                                   margin: 0 0 10px 0;
            //                                                                                   color: inherit;
            //                                                                                   font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
            //                                                                                   font-weight: normal;
            //                                                                                   padding: 0;
            //                                                                               "
            //                                                                                   >
            //                                                                                       <span>
            //                                                                                           Благодарим что обратились в юридическую компанию - Правосознание.
            //                                                                                       </span>
            //                                                                                   </p>
            //                                                                                   <p
            //                                                                                       style="
            //                                                                                   font-size: inherit;
            //                                                                                   line-height: inherit;
            //                                                                                   margin: 0 0 20px 0;
            //                                                                                   color: inherit;
            //                                                                                   font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
            //                                                                                   font-weight: normal;
            //                                                                                   padding: 0;
            //                                                                               "
            //                                                                                   >
            //                                                                                       <span>
            //                                                                                           В ближайшее время мы свяжемся с вами по указанному вами номеру телефона и обсудим интересующий вас вопрос, пожалуйста ожидайте звонка.
            //                                                                                       </span>
            //                                                                                   </p>
            //                                                                                   <p
            //                                                                                       style="
            //                                                                                   font-size: inherit;
            //                                                                                   line-height: inherit;
            //                                                                                   margin: 0 0 10px 0;
            //                                                                                   color: inherit;
            //                                                                                   font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
            //                                                                                   font-weight: normal;
            //                                                                                   padding: 0;
            //                                                                               "
            //                                                                                   >
            //                                                                                       <span style="font-size: 16px;"><strong>Предоставленные данные:</strong></span>
            //                                                                                   </p>
            //                                                                                   <p
            //                                                                                       style="
            //                                                                                   font-size: inherit;
            //                                                                                   line-height: inherit;
            //                                                                                   margin: 0 0 10px 0;
            //                                                                                   color: inherit;
            //                                                                                   font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
            //                                                                                   font-weight: normal;
            //                                                                                   padding: 0;
            //                                                                               "
            //                                                                                   >
            //                                                                                       Имя: ${name}
            //                                                                                   </p>
            //                                                                                   <p
            //                                                                                       style="
            //                                                                                   font-size: inherit;
            //                                                                                   line-height: inherit;
            //                                                                                   margin: 0 0 10px 0;
            //                                                                                   color: inherit;
            //                                                                                   font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
            //                                                                                   font-weight: normal;
            //                                                                                   padding: 0;
            //                                                                               "
            //                                                                                   >
            //                                                                                       Телефон: ${email}
            //                                                                                   </p>
            //                                                                               </td>
            //                                                                           </tr>
            //                                                                       </tbody>
            //                                                                   </table>
            //                                                               </td>
            //                                                           </tr>
            //                                                       </tbody>
            //                                                   </table>

            //                                               </th>
            //                                           </tr>
            //                                       </tbody>
            //                                   </table>
            //                                   <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 16px; line-height: 1.5; width: 100%;" border="0" width="100%">
            //                                       <tbody>
            //                                           <tr style="border-color: transparent;">
            //                                               <th
            //                                                   width="600"
            //                                                   style="border-color: transparent; font-weight: normal; text-align: left; vertical-align: top;"
            //                                                   cellpadding="0"
            //                                                   cellspacing="0"
            //                                                   class="m_8718936357472974987tc"
            //                                                   align="left"
            //                                                   valign="top"
            //                                               >
            //                                                   <table border="0" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 16px; line-height: 1.5; background-color: #fff;" bgcolor="#ffffff">
            //                                                       <tbody>
            //                                                           <tr style="border-color: transparent;">
            //                                                               <td cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-color: transparent;">
            //                                                                   <div
            //                                                                       class="m_8718936357472974987block-divider"
            //                                                                       style="font-size: 16px; line-height: 1.5; padding-left: 15px; padding-right: 15px; padding-top: 15px; padding-bottom: 15px;"
            //                                                                   >
            //                                                                   </div>
            //                                                               </td>
            //                                                           </tr>
            //                                                       </tbody>
            //                                                   </table>
            //                                                   <table border="0" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 16px; line-height: 1.5; background-color: #eee;" bgcolor="#eeeeee">
            //                                                       <tbody>
            //                                                           <tr style="border-color: transparent;">
            //                                                               <td cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-color: transparent;">
            //                                                                   <table
            //                                                                       width="100%"
            //                                                                       cellpadding="0"
            //                                                                       cellspacing="0"
            //                                                                       id="m_8718936357472974987wout_block_out_block_8"
            //                                                                       style="border-collapse: collapse; font-size: 16px; line-height: 1.5; font-weight: normal; margin: 0;"
            //                                                                   >
            //                                                                       <tbody>
            //                                                                           <tr style="border-color: transparent; color: #444; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">
            //                                                                               <td
            //                                                                                   class="m_8718936357472974987content-cell m_8718936357472974987padding-top-0 m_8718936357472974987padding-bottom-0"
            //                                                                                   width="540"
            //                                                                                   style="
            //                                                                               border-collapse: collapse;
            //                                                                               border-color: transparent;
            //                                                                               vertical-align: top;
            //                                                                               padding-left: 30px;
            //                                                                               padding-right: 30px;
            //                                                                               padding-top: 15px;
            //                                                                               padding-bottom: 0;
            //                                                                           "
            //                                                                                   valign="top"
            //                                                                               >
            //                                                                                   <p
            //                                                                                       style="
            //                                                                                   font-size: inherit;
            //                                                                                   line-height: inherit;
            //                                                                                   margin: 0 0 10px 0;
            //                                                                                   color: inherit;
            //                                                                                   font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
            //                                                                                   text-align: center;
            //                                                                                   font-weight: normal;
            //                                                                                   padding: 0;
            //                                                                               "
            //                                                                                       align="center"
            //                                                                                   >
            //                                                                                       <span style="font-size: 13px; line-height: 19.5px;">Правосознание - юридическая компания © 2022</span>
            //                                                                                   </p>
            //                                                                                   <p
            //                                                                                       style="
            //                                                                                   font-size: inherit;
            //                                                                                   line-height: inherit;
            //                                                                                   margin: 0 0 10px 0;
            //                                                                                   color: inherit;
            //                                                                                   font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
            //                                                                                   text-align: center;
            //                                                                                   font-weight: normal;
            //                                                                                   padding: 0;
            //                                                                               "
            //                                                                                       align="center"
            //                                                                                   >
            //                                                                                       <span style="font-size: 13px; line-height: 19.5px;">По возникшим вопросам вы можете обращаться по телефону: +7 (909) 785-34-27</span>
            //                                                                                   </p>
            //                                                                                   <div style="font-size: 16px; line-height: 1.5; clear: both;"></div>
            //                                                                               </td>
            //                                                                           </tr>
            //                                                                       </tbody>
            //                                                                   </table>
            //                                                               </td>
            //                                                           </tr>
            //                                                       </tbody>
            //                                                   </table>
            //                                                   <table border="0" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 16px; line-height: 1.5; background-color: #eee;" bgcolor="#eeeeee">
            //                                                       <tbody>
            //                                                           <tr style="border-color: transparent;">
            //                                                               <td cellpadding="0" cellspacing="0" style="border-collapse: collapse; border-color: transparent;">
            //                                                                   <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; font-size: 16px; line-height: 1.5; text-align: center;" align="center">
            //                                                                       <tbody>
            //                                                                           <tr style="border-color: transparent; color: #444; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">
            //                                                                               <td
            //                                                                                   class="m_8718936357472974987content-cell m_8718936357472974987padding-top-0"
            //                                                                                   width="540"
            //                                                                                   style="
            //                                                                               border-collapse: collapse;
            //                                                                               border-color: transparent;
            //                                                                               vertical-align: top;
            //                                                                               padding-left: 30px;
            //                                                                               padding-right: 30px;
            //                                                                               padding-top: 0;
            //                                                                               padding-bottom: 25px;
            //                                                                           "
            //                                                                                   valign="top"
            //                                                                               >
            //                                                                               </td>
            //                                                                           </tr>
            //                                                                       </tbody>
            //                                                                   </table>
            //                                                               </td>
            //                                                           </tr>
            //                                                       </tbody>
            //                                                   </table>
            //                                               </th>
            //                                           </tr>
            //                                       </tbody>
            //                                   </table>
            //                               </td>
            //                           </tr>
            //                       </tbody>
            //                   </table>
            //               </td>
            //           </tr>
            //       </tbody>
            //   </table>
            // </div>`
            // })

            ;
    } catch (err) {
        console.log(err);
    }

    res.status(200).json(req.body);
};

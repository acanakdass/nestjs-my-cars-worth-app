import { ValidationPipe, INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function ConfigureApp(app: INestApplication) {

    /* #region  Swagger Config */
    const config = new DocumentBuilder()
        .setTitle('My Cars Worth')
        .setDescription('My Cars Worth API description')
        .setVersion('1.0')
        .addTag('MyCarsWorth')
        .build();
    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, document);
    /* #endregion */


    /* #region  Pipe Configs */

    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true
        })
    )
    /* #endregion */
}

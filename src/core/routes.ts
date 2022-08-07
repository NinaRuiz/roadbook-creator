import {h} from "vue";

export default {
    createRoute(route: any) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const html2pdf = require('html2pdf.js');
        let html = "<div style='margin: 50px'>";
        html += ` <h2 style="text-align: center">${route.title}</h2>`;
        html += `<h4>${route.description}</h4>`;
        html += '<div style="display: flex; flex-wrap: wrap;">';
        html += '<div style="flex-basis: 0; flex-grow: 1; max-width: 100%;">';
        html += `<span><strong>Localización inicio:</strong> ${route.initLocation}</span>`;
        html += '</div>';
        html += '<div style="flex-basis: 0; flex-grow: 1; max-width: 100%;">';
        html += `<span><strong>Localización final:</strong> ${route.endLocation}</span>`;
        html += '</div>';
        html += '<div style="flex-basis: 0; flex-grow: 1; max-width: 100%;">';
        html += `<span><strong>Kilometros totales:</strong> ${route.totalKm}</span>`;
        html += '</div>';
        html += '</div>';
        html += '<table style="margin-top: 20px; width: 100%; border: 1px solid; border-collapse: collapse;">';
        html += '<tr>';
        html += '<th style="border: 1px solid black; border-collapse: collapse;">Km Total</th>';
        html += '<th style="border: 1px solid black; border-collapse: collapse;">Dirección</th>';
        html += '<th style="border: 1px solid black; border-collapse: collapse;">Información</th>';
        html += '</tr>';
        for (let i = 0; i < route.indications.length; i++) {
            const indication = route.indications[i];
            html += '<tr style="height: 100px;">';
            html += '<td style="border: 1px solid black; border-collapse: collapse;';
            if (indication.parcialKm < 0.5) {
                html += 'background-color: #64a460';
            }
            html += '">';
            html += `<h1 style="text-align: center">${indication.totalkm}</h1>`;
            html += '<div style="display: flex; flex-wrap: wrap;">';
            html += '<div style="flex-basis: 0; flex-grow: 1; max-width: 100%; border: 1px solid black; border-collapse: collapse;">';
            html += `<h4 style="text-align: center">${indication.parcialKm}</h4>`
            html += '</div>'
            html += '<div style="flex-basis: 0; flex-grow: 1; max-width: 100%;"></div>'
            html += '<div style="flex-basis: 0; flex-grow: 1; max-width: 100%;"></div>'
            html += '</div>'
            html += '</td>';

            html += '<td style="border: 1px solid black; border-collapse: collapse;">';
            html += '<div style="text-align: center">';
            html += `<img src="${indication.directionSrc.src}" height="100"/>`;
            html += '</div>';
            html += '</td><td style="border: 1px solid black; border-collapse: collapse; width: 200px">';

            html += '<div style="display: flex; flex-wrap: wrap;">';
            for (let j = 0; j <  indication.info.length; j++) {
                const info = indication.info[j];
                html += '<div style="flex-basis: 0; flex-grow: 1; max-width: 100%;">';
                if (info.type === 'string') {
                    html += `<h4 style="text-align: center">${info.content}</h4>`;
                }
                if (info.type === 'image') {
                    html += '<div style="text-align: center">';
                    html += `<img src="${info.content.src}" height="50"/>`;
                    html += '</div>';
                }
                html += '</div>';
            }
            html += '</div>';

            html += '<div style="display: flex; flex-wrap: wrap;">';
            html += '<div style="flex-basis: 0; flex-grow: 1; max-width: 100%; border: 1px solid black; border-collapse: collapse; background-color: #FFE800">';
            html += `<h4 style="text-align: center">${indication.degrees}º</h4>`;
            html += '</div>';
            html += '<div style="flex-basis: 0; flex-grow: 1; max-width: 100%;"></div>';
            html += '<div style="flex-basis: 0; flex-grow: 1; max-width: 100%;"></div>';
            html += '</div>';
            html += '</td></tr>'
        }
        html += '</table>';
        html += '</div>';
        html2pdf(html);
    }
}
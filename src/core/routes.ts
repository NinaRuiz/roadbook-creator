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
        html += '<th style="border: 1px solid black; border-collapse: collapse;">Km Parcial</th>';
        html += '<th style="border: 1px solid black; border-collapse: collapse;">Dirección</th>';
        html += '<th style="border: 1px solid black; border-collapse: collapse;">Información</th>';
        html += '</tr>';
        for (let i = 0; i < route.indications.length; i++) {
            const indication = route.indications[i];
            html += '<tr style="height: 100px;">';
            html += '<td style="border: 1px solid black; border-collapse: collapse;">';
            html += `<h1 style="text-align: center">${indication.totalkm}</h1>`;
            html += '</td><td style="border: 1px solid black; border-collapse: collapse;">';
            html += `<h4 style="text-align: center">${indication.parcialKm}</h4>`;
            html += '</td><td style="border: 1px solid black; border-collapse: collapse;">';
            html += '<div style="text-align: center">';
            console.log(indication);
            html += `<img src="${indication.directionSrc.src}" height="100"/>`;
            html += '</div>';
            html += '</td><td style="border: 1px solid black; border-collapse: collapse;">';
            html += `<p>${indication.info}</p>`;
            html += '</td></tr>'
        }
        html += '</table>';
        html += '</div>';
        html2pdf(html);
    }
}
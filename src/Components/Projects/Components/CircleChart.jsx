import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import '../../../../Styling/ProjectPages.css';

const data = {
    name: "Public sector expenditure",
    stringValue: "Public sector expenditure",
    value: 163702,
    stringValue: '163,702',
    children: [
        {
            name: "General public services",
            stringValue: "General public services",
            value: 163702,
            stringValue: '163,702',
            children: [
                { name: "Executive and legislative organs, financial and fiscal affairs, external affairs", value: 24483, stringValue: '24,483' },
                { name: "Foreign economic aid", value: 5129, stringValue: '5,129' },
                { name: "General services", value: 1822, stringValue: '1,822' },
                { name: "R&D general public services", value: 330, stringValue: '330' },
                { name: "General public services n.e.c.", value: 3539, stringValue: '3,539' },
                { name: "Public debt transactions", value: 128398, stringValue: '128,398' },
            ]
        },
        {
            name: "Defence",
            stringValue: "Defence",
            value: 55507,
            stringValue: '55,507',
            children: [
                { name: "Military defence", value: 50358, stringValue: '50,358' },
                { name: "Civil defence", value: 65, stringValue: '65' },
                { name: "Foreign military aid", value: 2618, stringValue: '2,618' },
                { name: "R&D defence", value: 2253, stringValue: '2,253' },
                { name: "Defence n.e.c.", value: 215, stringValue: '215' },
            ]
        },
        {
            name: "Public order and safety",
            stringValue: "Public order and safety",
            value: 43935,
            stringValue: '43,935',
            children: [
                { name: "Police services", value: 25285, stringValue: '25,285' },
                { name: "Fire-protection services", value: 3360, stringValue: '3,360' },
                { name: "Law courts", value: 8035, stringValue: '8,035' },
                { name: "Prisons", value: 6088, stringValue: '6,088' },
                { name: "R&D public order and safety", value: 1, stringValue: '1' },
                { name: "Public order and safety n.e.c.", value: 1167, stringValue: '1,167' },
            ],
        },
        {
            name: "Economic affairs",
            stringValue: "Economic affairs",
            value: 125050,
            stringValue: '125,050',
            children: [
                { name: "General economic, commercial and labour affairs", value: 22767, stringValue: '22,767' },
                {
                    name: "Agriculture, forestry, fishing and hunting",
                    stringValue: "Agriculture, forestry, fishing and hunting",
                    value: 6664,
                    stringValue: '6,664',
                    children: [
                        { name: "Market support under CAP", value: 2646, stringValue: '2,646' },
                        { name: "Other agriculture, food and fisheries policy", value: 3837, stringValue: '3,837' },
                        { name: "Forestry", value: 181, stringValue: '181' },
                    ],
                },
                { name: "Fuel and energy", value: 42940, stringValue: '42,940' },
                { name: "Mining, manufacturing and construction", value: 517, stringValue: '517' },
                {
                    name: "Transport",
                    stringValue: "Transport",
                    value: 43578,
                    stringValue: '43,578',
                    children: [
                        { name: "National roads", value: 5660, stringValue: '5,660' },
                        { name: "Local roads", value: 5468, stringValue: '5,468' },
                        { name: "Local public transport", value: 4344, stringValue: '4,344' },
                        { name: "Railway", value: 25942, stringValue: '25,942' },
                        { name: "Other transport", value: 2163, stringValue: '2,163' },
                    ],
                },
                { name: "Communication", value: 344, stringValue: '344' },
                { name: "Other industries", value: 338, stringValue: '338' },
                { name: "R&D economic affairs", value: 7162, stringValue: '7,162' },
                { name: "Economic affairs n.e.c.", value: 741, stringValue: '741' },
            ],
        },
        {
            name: "Environment protection",
            stringValue: "Environment protection",
            value: 13884,
            stringValue: '13,884',
            children: [
                { name: "Waste management", value: 10183, stringValue: '10,183' },
                { name: "Pollution abatement", value: 433, stringValue: '433' },
                { name: "Protection of biodiversity and landscape", value: 500, stringValue: '500' },
                { name: "R&D environment protection", value: 346, stringValue: '346' },
                { name: "Environment protection n.e.c.", value: 2423, stringValue: '2,423' },
            ],
        },
        {
            name: "Housing and community amenities",
            stringValue: "Housing and community amenities",
            value: 17790,
            stringValue: '17,790',
            children: [
                {
                    name: "Housing development",
                    stringValue: "Housing development",
                    value: 11404,
                    stringValue: '11,404',
                    children: [
                        { name: "Local authority housing", value: 9168, stringValue: '9,168' },
                        { name: "Other social housing", value: 2236, stringValue: '2,236' },
                    ],
                },
                { name: "Community development", value: 3874, stringValue: '3,874' },
                { name: "Water supply", value: 1127, stringValue: '1,127' },
                { name: "Street lighting", value: 884, stringValue: '884' },
                { name: "R&D housing and community amenities", value: 3, stringValue: '3' },
                { name: "Housing and community amenities n.e.c.", value: 498, stringValue: '498' },
            ],
        },
        {
            name: "Health",
            stringValue: "Health",
            value: 211570,
            stringValue: '211,570',
            children: [
                { name: "Medical services", value: 199888, stringValue: '199,888' },
                { name: "Medical research", value: 1944, stringValue: '1,944' },
                { name: "Central and other health services", value: 9738, stringValue: '9,738' },
            ],
        },
        {
            name: "Recreation, culture and religion",
            stringValue: "Recreation, culture and religion",
            value: 14010,
            stringValue: '14,010',
            children: [
                { name: "Recreational and sporting services", value: 4003, stringValue: '4,003' },
                { name: "Cultural services", value: 4481, stringValue: '4,481' },
                { name: "Broadcasting and publishing services", value: 5123, stringValue: '5,123' },
                { name: "Religious and other community services", value: 147, stringValue: '147' },
                { name: "R&D recreation, culture and religion", value: 97, stringValue: '97' },
                { name: "Recreation, culture and religion n.e.c.", value: 160, stringValue: '160' },
            ],
        },
        {
            name: "Education",
            value: 105539,
            stringValue: '105,539',
            children: [
            { name: "Pre-primary and primary education", value: 33769, stringValue:'33,769',
                children: [
                    { name: "Under fives", value: 4500, srtingValue: '4,500' },
                    { name: "Primary education", value: 29269, stringValue: '29,269' },
                ],
                },
            {
                name: "Secondary education",
                value: 54265,
                stringValue: '54,265'
                
            },
            { name: "Post-secondary non-tertiary education", value: 748, stringValue: '748' },
            { name: "Tertiary education", value: 4552, stringValue: '4,552' },
            { name: "Education not definable by level", value: 1272, stringValue: '1,272' },
            { name: "Subsidiary services to education", value: 5169, stringValue: '5,169' },
            { name: "R&D education", value: 2972, stringValue: '2,972' },
            { name: "Education n.e.c.", value: 2792, stringValue: '2,792' },
            ],
        },
        {
            name: "Social protection",
            stringValue: "Social protection",
            value: 318772,
            stringValue: '318,772',
            children: [
                {
                    name: "Sickness and disability",
                    stringValue: "Sickness and disability",
                    value: 65419,
                    stringValue: '65,419',
                    children: [
                        { name: "Personal social services", value: 13411, stringValue: '13,411' },
                        { name: "Incapacity, disability and injury benefits", value: 52008, stringValue: '52,008' },
                    ],
                },
                {
                    name: "Old age",
                    stringValue: "Old age",
                    value: 137274,
                    stringValue: '137,274',
                    children: [
                        { name: "Personal social services", value: 13473, stringValue: '13,473' },
                        { name: "Pensions", value: 123800, stringValue: '123,800' },
                    ],
                },
                { name: "Survivors", value: 1357, stringValue: '1,357' },
                {
                    name: "Family and children",
                    stringValue: "Family and children",
                    value: 28060,
                    stringValue: '28,060',
                    children: [
                        {
                            name: "Personal social services",
                            stringValue: "Personal social services",
                            value: 13430,
                            stringValue: '13,430',
                        },
                        { name: "Family benefits, income support and tax credits", value: 14630, stringValue: '14,630' },
                    ],
                },
                { name: "Unemployment", value: 1003, stringValue: '1,003' },
                { name: "Housing", value: 16559, stringValue: '16,559' },
                {
                    name: "Social exclusion n.e.c. (8)",
                    stringValue: "Social exclusion n.e.c. (8)",
                    value: 57135,
                    stringValue: '57,135',
                    children: [
                        { name: "Personal social services", value: 1178, stringValue: '1,178' },
                        {
                            name: "Family benefits, income support, Universal Credit and tax credits",
                            value: 55957,
                            stringValue: '55,957',
                        },
                    ],
                },
                { name: "Social protection n.e.c.", value: 11965, stringValue: '11,965' },
            ],
        },
    ]
}

const CircleChart = () => {
    const d3Container = useRef();
    
    useEffect(() => {
        // Specify the chart’s dimensions.
        const screenWidth = window.innerWidth
        const newWidth = screenWidth < 900 ? 400 : 700
        const width = newWidth;
        const height = width;
    
        // Create the color scale.
        const color = d3.scaleLinear()
            .domain([0, 5])
            .range(["hsl(200, 80%, 80%)", "hsl(240, 30%, 40%)"])
            .interpolate(d3.interpolateHcl);
    
        // Compute the layout.
        const pack = data => d3.pack()
            .size([width, height])
            .padding(3)
            (d3.hierarchy(data)
            .sum(d => d.value)
            .sort((a, b) => b.value - a.value));
        const root = pack(data);
    
        // SVG container.
        const svg = d3.select(d3Container.current).append("svg")
        .attr("viewBox", `-${width / 2} -${height / 2} ${width} ${height}`)
        .attr("width", width)
        .attr("height", height)
        .attr("style", `max-width: 100%; height: auto; display: block; margin: 0 -14px; background: ${color(0)}; cursor: pointer;`);
    
        // Nodes
        const node = svg.append("g")
            .selectAll("circle")
            .data(root.descendants().slice(1))
            .join("circle")
            .attr("fill", d => d.children ? color(d.depth) : "white")
            .attr("pointer-events", d => !d.children ? "none" : null)
            .on("mouseover", function () { d3.select(this).attr("stroke", "#000"); })
            .on("mouseout", function () { d3.select(this).attr("stroke", null); })
            .on("click", (event, d) => focus !== d && (zoom(event, d), event.stopPropagation()));
    
        // Text labels
        const label = svg.append("g")
            .style("font", "bold 13px sans-serif")
            .attr("pointer-events", "none")
            .attr("text-anchor", "middle")
            .selectAll("text")
            .data(root.descendants())
            .join("text")
            .style("fill-opacity", d => d.parent === root ? 1 : 0)
            .style("display", d => d.parent === root ? "inline" : "none")
            .text(d => d.data.name);

        const valueLabel = svg.append("g")
            .style("font", "14px sans-serif")
            .attr("pointer-events", "none")
            .attr("text-anchor", "middle")
            .selectAll("text")
            .data(root.descendants())
            .join("text")
            .style("fill-opacity", d => d.parent === root ? 1 : 0)
            .style("display", d => d.parent === root ? "inline" : "none")
            .text(d => d.data.stringValue);

        // Zoom behavior 
        svg.on("click", (event) => zoom(event, root));
        let focus = root;
        let view;
        zoomTo([focus.x, focus.y, focus.r * 2]);

        function zoomTo(v) {
            const k = width / v[2];
            const zoomLevel = v[2] < width / 7 ? 2 : v[2] < width / 5 ? 5 : v[2] < width / 3.5 ? 5 : v[2] < width / 3 ? 6 : v[2] < width / 2.5 ? 10 : v[2] < width / 2 ? 10 : 20
    
            view = v;
    
            label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
            valueLabel.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1] + zoomLevel) * k})`);     

            node.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
            node.attr("r", d => d.r * k);
        }
    
        function zoom(event, d) {
            const focus0 = focus;
    
            focus = d;
    
            const transition = svg.transition()
            .duration(event.altKey ? 7500 : 750)
            .tween("zoom", d => {
                const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
                return t => zoomTo(i(t));
            });
    
            label
            .filter(function (d) { return d.parent === focus || this.style.display === "inline"; })
            .transition(transition)
            .style("fill-opacity", d => d.parent === focus ? 1 : 0)
            .on("start", function (d) { if (d.parent === focus) this.style.display = "inline"; })
            .on("end", function (d) { if (d.parent !== focus) this.style.display = "none"; });

            valueLabel
            .filter(function (d) { return d.parent === focus || this.style.display === "inline"; })
            .transition(transition)
            .style("fill-opacity", d => d.parent === focus ? 1 : 0)
            .on("start", function (d) { if (d.parent === focus) this.style.display = "inline"; })
            .on("end", function (d) { if (d.parent !== focus) this.style.display = "none"; });
        }

        }, []);
    
        return (
        <div>
            <div ref={d3Container}></div>
        </div>
    );
};

export default CircleChart;
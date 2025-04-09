// src/components/NewPalm.jsx
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const NewPalm = ({ className, style }) => {
     // Create refs for elements we want to animate
     const svgRef = useRef(null);
     const leavesRef = useRef(null);
     const waterRef = useRef(null);
     const trunkRef = useRef(null);
 
     useEffect(() => {
        // Get the elements we want to animate
        const leaves = leavesRef.current;
        const water = waterRef.current;
        const trunk = trunkRef.current;
    
        if (!leaves || !water || !trunk) return;
    
        // Set up leaf animation with MUCH STRONGER wind effect
        gsap.to(leaves, {
            rotation: 8, // Increased from 5 to 8 for dramatic movement
            transformOrigin: 'bottom center',
            duration: 1.5, // Decreased from 2 to 1.5 for faster movement
            ease: 'power2.inOut', // Changed ease for more natural wave-like motion
            yoyo: true,
            repeat: -1
        });
    
        // Also animate leaves with a slight scale for more dramatic effect
        gsap.to(leaves, {
            scale: 1.03,
            transformOrigin: 'bottom center',
            duration: 1.7,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1
        });
    
        // Set up trunk with more pronounced sway
        gsap.to(trunk, {
            rotation: 2.5, // Increased from 1.5 to 2.5
            transformOrigin: 'bottom center',
            duration: 2, // Slightly faster
            ease: 'power2.inOut',
            yoyo: true,
            repeat: -1
        });
    
        // Set up water animation with much more dramatic wave effect
        const waterElements = water.querySelectorAll('path');
        waterElements.forEach((el, index) => {
            gsap.to(el, {
                y: -8 + Math.random() * 6, // Increased amplitude significantly
                x: -3 + Math.random() * 6, // Increased horizontal movement
                duration: 1.2 + Math.random() * 0.8, // Faster waves
                ease: 'sine.inOut',
                delay: index * 0.08, // Slightly faster sequence
                yoyo: true,
                repeat: -1
            });
        });
    
        // Add subtle pulsing animation to entire SVG for more liveliness
        gsap.to(svgRef.current, {
            scale: 1.01,
            duration: 3,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
        });
    
        // Cleanup function
        return () => {
            gsap.killTweensOf([leaves, trunk, ...waterElements, svgRef.current]);
        };
    }, []);

    return (
    <svg
        ref={svgRef}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 500 500"
        preserveAspectRatio="xMidYMid meet"
        style={{
            width: '100%',
            height: '100%',
            transform: 'translate3d(0px, 0px, 0px)',
            ...style
        }}
    >
        <defs>
            <clipPath id="__lottie_element_1002">
                <rect width="500" height="500" x="0" y="0" />
            </clipPath>
        </defs>
        <g clipPath="url(#__lottie_element_1002)">
            {/* Add ref to the water group */}
            <g ref={waterRef} transform="matrix(1,0,0,1,0,1.83734130859375)" opacity="1" style={{ display: "block" }}>
                <g opacity="1" transform="matrix(1,0,0,1,249.23199462890625,426.09600830078125)">
                    <path
                        fill="rgb(66,170,255)"
                        fillOpacity="1"
                        d=" M-139.0030059814453,-21.503000259399414 C-144.17599487304688,-19.64299964904785 -152.1929931640625,-14.937000274658203 -137.24600219726562,-6.2789998054504395 C-135.76199340820312,-5.419000148773193 -134.1580047607422,-4.78000020980835 -132.48599243164062,-4.395999908447266 C-128.58099365234375,-3.497999906539917 -120.71399688720703,-1.5140000581741333 -118.81999969482422,0.28299999237060547 C-118.01100158691406,1.0509999990463257 -117.08499908447266,1.6740000247955322 -116.12200164794922,2.236999988555908 C-113.61299896240234,3.703000068664551 -109.77799987792969,6.188000202178955 -108.58300018310547,8.309000015258789 C-107.97699737548828,9.381999969482422 -106.84300231933594,10.994999885559082 -105.94100189208984,11.836000442504883 C-102.53600311279297,15.010000228881836 -96.0739974975586,20.549999237060547 -91.91899871826172,21.091999053955078 C-91.91899871826172,21.091999053955078 -70.5270004272461,26.69499969482422 -60.084999084472656,25.676000595092773 C-60.084999084472656,25.676000595092773 -17.108999252319336,29.19099998474121 -9.45199966430664,21.533000946044922 C-9.45199966430664,21.533000946044922 -7.6529998779296875,19.964000701904297 -7.249000072479248,20.042999267578125 C0.37299999594688416,21.533000946044922 24.386999130249023,19.73900032043457 24.386999130249023,19.73900032043457 C31.71299934387207,19.73900032043457 60.632999420166016,22.106000900268555 62.25699996948242,22.142000198364258 C69.0530014038086,22.295000076293945 85.49099731445312,22.488000869750977 89.26200103759766,20.461000442504883 C89.9469985961914,20.091999053955078 90.66899871826172,19.819000244140625 91.40599822998047,19.57200050354004 C94.60399627685547,18.50200080871582 101.80000305175781,15.720000267028809 105.81199645996094,11.22700023651123 C106.11000061035156,10.892999649047852 106.40699768066406,10.571999549865723 106.7239990234375,10.255999565124512 C109.5250015258789,7.453999996185303 115.3010025024414,4.334000110626221 117.40799713134766,4.086999893188477 C117.40799713134766,4.086999893188477 135.51800537109375,0.8610000014305115 138.01199340820312,-1.6339999437332153 C138.33900451660156,-1.9609999656677246 138.83299255371094,-2.065000057220459 139.2519989013672,-2.26200008392334 C141.13800048828125,-3.1480000019073486 146.23800659179688,-4.991000175476074 149.35400390625,-7.814000129699707 C151.52000427246094,-9.777000427246094 152.19400024414062,-12.88599967956543 151.10299682617188,-15.597000122070312 C149.1580047607422,-20.429000854492188 144.83799743652344,-29.19099998474121 141.10899353027344,-24.976999282836914 C135.09100341796875,-18.176000595092773 -106.81300354003906,-22.349000930786133 -133.33999633789062,-22.448999404907227 C-135.26800537109375,-22.45599937438965 -137.18899536132812,-22.155000686645508 -139.0030059814453,-21.503000259399414z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,102.5780029296875,415.82501220703125)">
                    <path
                        fill="rgb(66,170,255)"
                        fillOpacity="1"
                        d=" M-1.2940000295639038,-7.388000011444092 C-1.2940000295639038,-7.388000011444092 -9.4399995803833,-3.6449999809265137 -6.35699987411499,1.6390000581741333 C-3.2750000953674316,6.923999786376953 9.440999984741211,7.363999843597412 9.440999984741211,7.363999843597412 C9.440999984741211,7.363999843597412 6.461999893188477,7.388000011444092 0.8119999766349792,1.1990000009536743 C-4.839000225067139,-4.988999843597412 -1.2940000295639038,-7.388000011444092 -1.2940000295639038,-7.388000011444092z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,148.95399475097656,441.1340026855469)">
                    <path
                        fill="rgb(66,170,255)"
                        fillOpacity="1"
                        d=" M-23.66900062561035,-12.65999984741211 C-23.66900062561035,-12.65999984741211 -15.184000015258789,-8.180999755859375 -13.100000381469727,-5.39300012588501 C-10.364999771118164,-1.7350000143051147 -3.6050000190734863,4.144999980926514 0.550000011920929,6.276000022888184 C3.321000099182129,7.696000099182129 5.175000190734863,9.192999839782715 14.42300033569336,10.927000045776367 C23.670000076293945,12.66100025177002 -1.024999976158142,11.119000434875488 -10.366000175476074,4.953999996185303 C-19.707000732421875,-1.2109999656677246 -23.66900062561035,-12.65999984741211 -23.66900062561035,-12.65999984741211z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,374.20098876953125,435.08099365234375)">
                    <path
                        fill="rgb(66,170,255)"
                        fillOpacity="1"
                        d=" M-38.422000885009766,16.070999145507812 C-38.422000885009766,16.070999145507812 -14.642000198364258,8.145999908447266 -10.89900016784668,0.6589999794960022 C-7.156000137329102,-6.828000068664551 -1.1369999647140503,0.7149999737739563 15.743000030517578,-8.789999961853027 C32.62300109863281,-18.295000076293945 24.53499984741211,-19.26799964904785 28.072999954223633,-19.26799964904785 C38.422000885009766,-19.26799964904785 26.604000091552734,-8.901000022888184 24.329999923706055,-5.066999912261963 C21.024999618530273,0.5070000290870667 -2.996000051498413,12.529999732971191 0.7710000276565552,5.51800012588501 C4.0320000648498535,-0.5540000200271606 -17.17300033569336,13.300999641418457 -18.606000900268555,13.869000434875488 C-25.05699920654297,16.424999237060547 -33.61800003051758,19.26799964904785 -38.422000885009766,16.070999145507812z"
                    />
                </g>
            </g>
            <g transform="matrix(1,0,0,1,0,0)" opacity="1" style={{ display: "block" }}>
                <g opacity="1" transform="matrix(1,0,0,1,252.56399536132812,399.3890075683594)">
                    <path
                        fill="rgb(239,130,0)"
                        fillOpacity="1"
                        d=" M-77.04000091552734,-36.0359992980957 C-77.04000091552734,-36.0359992980957 -120.33499908447266,-30.941999435424805 -135.1060028076172,0.12800000607967377 C-149.8769989013672,31.198999404907227 30.16900062561035,36.0359992980957 31.957000732421875,32.215999603271484 C33.74399948120117,28.395999908447266 149.8769989013672,26.20599937438965 144.0189971923828,-1.3489999771118164 C138.16200256347656,-28.905000686645508 76.02100372314453,-8.78600025177002 76.02100372314453,-8.78600025177002"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,257.0119934082031,388.625)">
                    <path
                        fill="rgb(252,144,16)"
                        fillOpacity="1"
                        d=" M-25.34000015258789,-32.97999954223633 C-25.34000015258789,-32.97999954223633 -76.02100372314453,-36.79999923706055 -106.58200073242188,-11.333000183105469 C-137.14300537109375,14.135000228881836 -66.80000305175781,36.80099868774414 20.655000686645508,34.50899887084961 C91.1729965209961,32.6609992980957 124.2030029296875,16.90399932861328 134.3520050048828,10.869999885559082 C136.46800231933594,9.612000465393066 137.14300537109375,6.860000133514404 135.85000610351562,4.765999794006348 C133.36099243164062,0.7310000061988831 128.79200744628906,-5.142000198364258 123.13600158691406,-5.474999904632568"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,288.4200134277344,383.40399169921875)">
                    <path
                        fill="rgb(251,155,40)"
                        fillOpacity="1"
                        d=" M-25.28700065612793,-31.070999145507812 C-26.357999801635742,-31.070999145507812 -101.74299621582031,-36.165000915527344 -105.56300354003906,0 C-109.38300323486328,36.16400146484375 55.52799987792969,25.976999282836914 58.44900131225586,21.13800048828125 C61.369998931884766,16.298999786376953 91.55699920654297,17.82699966430664 100.47100067138672,4.328999996185303 C109.38400268554688,-9.168999671936035 43.08700180053711,-24.983999252319336 22.499000549316406,-26.753999710083008"
                    />
                </g>
            </g>
            
            {/* Add ref to the trunk group */}
            <g
                ref={trunkRef}
                transform="matrix(0.9999811053276062,0.006149557884782553,-0.006149557884782553,0.9999811053276062,2.262176513671875,-1.70880126953125)"
                opacity="1"
                style={{ display: "block" }}
            >
<g opacity="1" transform="matrix(1,0,0,1,157.6719970703125,187.1269989013672)">
                    <path
                        fill="rgb(136,176,39)"
                        fillOpacity="1"
                        d=" M-24.874000549316406,56.28300094604492 C-24.874000549316406,56.28300094604492 -36.08000183105469,15.024999618530273 12.309000015258789,-0.0010000000474974513 C12.309000015258789,-0.0010000000474974513 50.000999450683594,-25.722000122070312 50.000999450683594,-25.722000122070312 C50.000999450683594,-25.722000122070312 62.73500061035156,-27.67099952697754 62.73500061035156,-27.67099952697754 C62.73500061035156,-27.67099952697754 16.89299964904785,-56.28300094604492 -21.30900001525879,-23.174999237060547 C-62.73500061035156,12.727999687194824 -24.874000549316406,56.28300094604492 -24.874000549316406,56.28300094604492z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,189.48199462890625,200.9709930419922)">
                    <path
                        fill="rgb(124,153,2)"
                        fillOpacity="1"
                        d=" M32.05400085449219,-41.604000091552734 C32.05400085449219,-41.604000091552734 5.313000202178955,-36.000999450683594 -2.5820000171661377,-1.8739999532699585 C-10.47700023651123,32.25199890136719 7.605000019073486,47.80699920654297 7.605000019073486,47.80699920654297 C7.605000019073486,47.80699920654297 -32.053001403808594,29.474000930786133 -27.6200008392334,-4.238999843597412 C-26.18199920654297,-15.17199993133545 -20.257999420166016,-24.976999282836914 -11.729999542236328,-31.9689998626709 C-2.385999917984009,-39.630001068115234 12.991000175476074,-47.80699920654297 32.05400085449219,-41.604000091552734z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,195.61300659179688,98.97799682617188)">
                    <path
                        fill="rgb(108,162,3)"
                        fillOpacity="1"
                        d=" M-4.034999847412109,34.492000579833984 C-4.034999847412109,34.492000579833984 -25.922000885009766,-30.4060001373291 25.922000885009766,-48.994998931884766 C25.922000885009766,-48.994998931884766 12.0600004196167,-11.020999908447266 18.93600082397461,-4.913000106811523 C25.812000274658203,1.1950000524520874 11.550000190734863,48.994998931884766 11.550000190734863,48.994998931884766"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,271.9049987792969,110.57499694824219)">
                    <path
                        fill="rgb(136,176,39)"
                        fillOpacity="1"
                        d=" M59.98500061035156,1.590000033378601 C59.98500061035156,1.590000033378601 26.222000122070312,-24.63599967956543 -6.275000095367432,14.237000465393066 C-6.275000095367432,14.237000465393066 -44.527000427246094,39.119998931884766 -44.527000427246094,39.119998931884766 C-44.527000427246094,39.119998931884766 -51.22800064086914,50.12200164794922 -51.22800064086914,50.12200164794922 C-51.22800064086914,50.12200164794922 -59.98500061035156,-3.2019999027252197 -14.722000122070312,-25.711999893188477 C34.362998962402344,-50.12200164794922 59.98500061035156,1.590000033378601 59.98500061035156,1.590000033378601z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,240.4199981689453,97.6989974975586)">
                    <path
                        fill="rgb(196,227,64)"
                        fillOpacity="1"
                        d=" M42.737998962402344,-55.257999420166016 C42.737998962402344,-55.257999420166016 14.946999549865723,-40.35900115966797 4.980000019073486,0.4620000123977661 C-4.986000061035156,41.284000396728516 -19.743999481201172,62.999000549316406 -19.743999481201172,62.999000549316406 C-19.743999481201172,62.999000549316406 -42.73899841308594,45.12799835205078 -34.060001373291016,-1.4739999771118164 C-25.381000518798828,-48.07699966430664 37.41299819946289,-62.999000549316406 42.737998962402344,-55.257999420166016z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,267.5010070800781,145.1999969482422)">
                    <path
                        fill="rgb(124,153,2)"
                        fillOpacity="1"
                        d=" M-45.96500015258789,15.855999946594238 C-45.96500015258789,15.855999946594238 -30.5,-6.666999816894531 4.035999774932861,-0.8140000104904175 C38.571998596191406,5.039000034332275 45.96500015258789,27.71500015258789 45.96500015258789,27.71500015258789 C45.96500015258789,27.71500015258789 44.314998626708984,-15.942999839782715 11.494000434875488,-24.832000732421875 C0.8500000238418579,-27.71500015258789 -10.479999542236328,-26.02199935913086 -20.216999053955078,-20.843000411987305 C-30.884000778198242,-15.168999671936035 -44.35100173950195,-4.125 -45.96500015258789,15.855999946594238z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,152.38999938964844,143.6320037841797)">
                    <path
                        fill="rgb(196,227,64)"
                        fillOpacity="1"
                        d=" M-64.0510025024414,30.052000045776367 C-64.0510025024414,30.052000045776367 -39.60200119018555,10.138999938964844 1.909999966621399,16.656999588012695 C43.422000885009766,23.176000595092773 69.1449966430664,17.915000915527344 69.1449966430664,17.915000915527344 C69.1449966430664,17.915000915527344 61.505001068115234,-10.187000274658203 15.152999877929688,-20.118999481201172 C-31.197999954223633,-30.052000045776367 -69.1449966430664,22.156999588012695 -64.0510025024414,30.052000045776367z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,277.88800048828125,342.8089904785156)">
                    <path
                        fill="rgb(161,92,11)"
                        fillOpacity="1"
                        d=" M7.205999851226807,-21.43899917602539 C7.205999851226807,-21.43899917602539 22.336000442504883,25.42099952697754 21.39299964904785,25.676000595092773 C20.448999404907227,25.930999755859375 -19.790000915527344,26.950000762939453 -21.062999725341797,25.676000595092773 C-22.336000442504883,24.402999877929688 -13.677000045776367,-25.606000900268555 -15.970000267028809,-26.277999877929688 C-18.261999130249023,-26.950000762939453 7.205999851226807,-21.43899917602539 7.205999851226807,-21.43899917602539z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,276.8169860839844,306.8819885253906)">
                    <path
                        fill="rgb(100,56,9)"
                        fillOpacity="1"
                        d=" M4.584000110626221,-17.21500015258789 C4.584000110626221,-17.21500015258789 18.7189998626709,15.097000122070312 15.407999992370605,17.134000778198242 C12.097000122070312,19.172000885009766 -18.204999923706055,19.172000885009766 -18.461999893188477,18.408000946044922 C-18.7189998626709,17.64299964904785 -13.008999824523926,-17.361000061035156 -15.407999992370605,-18.266000747680664 C-17.80699920654297,-19.17099952697754 4.584000110626221,-17.21500015258789 4.584000110626221,-17.21500015258789z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,273.6300048828125,277.5369873046875)">
                    <path
                        fill="rgb(158,93,13)"
                        fillOpacity="1"
                        d=" M1.9249999523162842,-15.918000221252441 C1.9249999523162842,-15.918000221252441 15.66100025177002,13.63599967956543 13.114999771118164,15.539999961853027 C10.567999839782715,17.44499969482422 -15.66100025177002,15.539999961853027 -15.66100025177002,15.539999961853027 C-15.66100025177002,15.539999961853027 -11.746000289916992,-17.445999145507812 -10.776000022888184,-16.937000274658203 C-9.805999755859375,-16.427000045776367 1.9249999523162842,-15.918000221252441 1.9249999523162842,-15.918000221252441z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,268.572998046875,249.86099243164062)">
                    <path
                        fill="rgb(100,56,9)"
                        fillOpacity="1"
                        d=" M1.1050000190734863,-15.005000114440918 C1.1050000190734863,-15.005000114440918 13.842000007629395,12.378000259399414 12.314000129699707,14.104999542236328 C10.78600025177002,15.831999778747559 -9.329000473022461,17.106000900268555 -10.604999542236328,16.086999893188477 C-11.880000114440918,15.067999839782715 -7.367000102996826,-12.902999877929688 -10.604999542236328,-15.005000114440918 C-13.842000007629395,-17.10700035095215 1.1050000190734863,-15.005000114440918 1.1050000190734863,-15.005000114440918z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,264.3070068359375,226.03399658203125)">
                    <path
                        fill="rgb(139,85,19)"
                        fillOpacity="1"
                        d=" M-3.7950000762939453,-13.371000289916992 C-3.7950000762939453,-13.371000289916992 12.25,9.96399974822998 8.175000190734863,11.0600004196167 C4.099999904632568,12.154999732971191 -10.052000045776367,14.446999549865723 -9.215999603271484,13.937999725341797 C-8.378999710083008,13.428999900817871 -12.25,-14.446999549865723 -11.6899995803833,-13.371000289916992 C-11.130000114440918,-12.295000076293945 -3.7950000762939453,-13.371000289916992 -3.7950000762939453,-13.371000289916992z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,255.93299865722656,205.59100341796875)">
                    <path
                        fill="rgb(113,60,5)"
                        fillOpacity="1"
                        d=" M-5.933000087738037,-12.225000381469727 C-5.933000087738037,-12.225000381469727 10.314000129699707,4.215000152587891 8.78600025177002,7.073999881744385 C7.257999897003174,9.932999610900879 -4.455999851226807,12.225000381469727 -4.455999851226807,12.225000381469727 C-4.455999851226807,12.225000381469727 -9.177000045776367,-8.913000106811523 -9.744999885559082,-8.913000106811523 C-10.314000129699707,-8.913000106811523 -5.933000087738037,-12.225000381469727 -5.933000087738037,-12.225000381469727z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,246.0760040283203,188.10299682617188)">
                    <path
                        fill="rgb(145,81,15)"
                        fillOpacity="1"
                        d=" M-3.51200008392334,-10.781000137329102 C-3.51200008392334,-10.781000137329102 6.877999782562256,-0.8600000143051147 8.914999961853027,5.251999855041504 C8.914999961853027,5.251999855041504 4.077000141143799,9.434000015258789 -1.2710000276565552,10.781000137329102 C-1.2710000276565552,10.781000137329102 -8.916000366210938,-6.98199987411499 -8.793000221252441,-7.033999919891357 C-8.670000076293945,-7.086999893188477 -3.51200008392334,-10.781000137329102 -3.51200008392334,-10.781000137329102z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,231.2790069580078,170.23899841308594)">
                    <path
                        fill="rgb(98,51,8)"
                        fillOpacity="1"
                        d=" M-10.930999755859375,-9.857000350952148 C-9.295999526977539,-11.267999649047852 -6.85699987411499,-11.22599983215332 -5.1570000648498535,-9.892999649047852 C-0.2809999883174896,-6.071000099182129 10.307000160217285,2.5460000038146973 11.284000396728516,6.063000202178955 C11.699999809265137,7.563000202178955 9.82800006866455,8.97700023651123 7.7729997634887695,10.039999961853027 C5.396999835968018,11.267999649047852 2.4730000495910645,10.253999710083008 1.3890000581741333,7.807000160217285 C-1.274999976158142,1.7970000505447388 -6.396999835968018,-8.680000305175781 -9.744000434875488,-8.692000389099121 C-11.699999809265137,-8.699000358581543 -11.652000427246094,-9.234000205993652 -10.930999755859375,-9.857000350952148z"
                    />
                </g>
            </g>
            
            {/* Add ref to the leaves group */}
            <g
                ref={leavesRef}
                transform="matrix(0.9998298287391663,0.018447743728756905,-0.018447743728756905,0.9998298287391663,6.710174560546875,-5.41754150390625)"
                opacity="1"
                style={{ display: "block" }}
            >
                <g opacity="1" transform="matrix(1,0,0,1,368.96600341796875,252.52999877929688)">
                    <path
                        fill="rgb(136,176,39)"
                        fillOpacity="1"
                        d=" M15.8100004196167,35.77399826049805 C15.8100004196167,35.77399826049805 22.93199920654297,9.550999641418457 -7.822999954223633,0 C-7.822999954223633,0 -31.7810001373291,-16.349000930786133 -31.7810001373291,-16.349000930786133 C-31.7810001373291,-16.349000930786133 -39.874000549316406,-17.58799934387207 -39.874000549316406,-17.58799934387207 C-39.874000549316406,-17.58799934387207 -10.737000465393066,-35.77399826049805 13.543999671936035,-14.729999542236328 C39.875,8.09000015258789 15.8100004196167,35.77399826049805 15.8100004196167,35.77399826049805z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,348.74700927734375,261.3299865722656)">
                    <path
                        fill="rgb(124,153,2)"
                        fillOpacity="1"
                        d=" M-20.37299919128418,-26.444000244140625 C-20.37299919128418,-26.444000244140625 -3.375999927520752,-22.881999969482422 1.6419999599456787,-1.190999984741211 C6.659999847412109,20.5 -4.833000183105469,30.386999130249023 -4.833000183105469,30.386999130249023 C-4.833000183105469,30.386999130249023 20.37299919128418,18.733999252319336 17.555999755859375,-2.694000005722046 C16.642000198364258,-9.642999649047852 12.87600040435791,-15.875 7.455999851226807,-20.319000244140625 C1.5169999599456787,-25.187999725341797 -8.256999969482422,-30.386999130249023 -20.37299919128418,-26.444000244140625z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,344.8500061035156,196.5030059814453)">
                    <path
                        fill="rgb(108,162,3)"
                        fillOpacity="1"
                        d=" M2.565000057220459,21.92300033569336 C2.565000057220459,21.92300033569336 16.47599983215332,-19.326000213623047 -16.47599983215332,-31.141000747680664 C-16.47599983215332,-31.141000747680664 -7.664999961853027,-7.005000114440918 -12.03499984741211,-3.122999906539917 C-16.4060001373291,0.7590000033378601 -7.341000080108643,31.141000747680664 -7.341000080108643,31.141000747680664"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,296.3590087890625,203.87399291992188)">
                    <path
                        fill="rgb(136,176,39)"
                        fillOpacity="1"
                        d=" M-38.125999450683594,1.0099999904632568 C-38.125999450683594,1.0099999904632568 -16.66699981689453,-15.659000396728516 3.98799991607666,9.048999786376953 C3.98799991607666,9.048999786376953 28.301000595092773,24.86400032043457 28.301000595092773,24.86400032043457 C28.301000595092773,24.86400032043457 32.560001373291016,31.85700035095215 32.560001373291016,31.85700035095215 C32.560001373291016,31.85700035095215 38.125999450683594,-2.0360000133514404 9.357000350952148,-16.343000411987305 C-21.841999053955078,-31.857999801635742 -38.125999450683594,1.0099999904632568 -38.125999450683594,1.0099999904632568z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,316.3710021972656,195.69000244140625)">
                    <path
                        fill="rgb(196,227,64)"
                        fillOpacity="1"
                        d=" M-27.163999557495117,-35.12200164794922 C-27.163999557495117,-35.12200164794922 -9.5,-25.652999877929688 -3.1649999618530273,0.2930000126361847 C3.1700000762939453,26.239999771118164 12.548999786376953,40.04199981689453 12.548999786376953,40.04199981689453 C12.548999786376953,40.04199981689453 27.163999557495117,28.683000564575195 21.648000717163086,-0.9380000233650208 C16.131999969482422,-30.558000564575195 -23.77899932861328,-40.04199981689453 -27.163999557495117,-35.12200164794922z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,299.1579895019531,225.8820037841797)">
                    <path
                        fill="rgb(124,153,2)"
                        fillOpacity="1"
                        d=" M29.215999603271484,10.07800006866455 C29.215999603271484,10.07800006866455 19.385000228881836,-4.236999988555908 -2.565000057220459,-0.5170000195503235 C-24.516000747680664,3.2019999027252197 -29.215999603271484,17.615999221801758 -29.215999603271484,17.615999221801758 C-29.215999603271484,17.615999221801758 -28.166000366210938,-10.133999824523926 -7.306000232696533,-15.782999992370605 C-0.5400000214576721,-17.615999221801758 6.660999774932861,-16.540000915527344 12.850000381469727,-13.248000144958496 C19.6299991607666,-9.642000198364258 28.190000534057617,-2.621999979019165 29.215999603271484,10.07800006866455z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,372.3219909667969,224.88600158691406)">
                    <path
                        fill="rgb(196,227,64)"
                        fillOpacity="1"
                        d=" M40.71099853515625,19.10099983215332 C40.71099853515625,19.10099983215332 25.17099952697754,6.443999767303467 -1.2139999866485596,10.586999893188477 C-27.599000930786133,14.729999542236328 -43.948001861572266,11.38700008392334 -43.948001861572266,11.38700008392334 C-43.948001861572266,11.38700008392334 -39.09199905395508,-6.474999904632568 -9.630999565124512,-12.788000106811523 C19.82900047302246,-19.10099983215332 43.948001861572266,14.083000183105469 40.71099853515625,19.10099983215332z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,294.3909912109375,352.2139892578125)">
                    <path
                        fill="rgb(100,56,9)"
                        fillOpacity="1"
                        d=" M-4.545000076293945,-13.517999649047852 C-3.1089999675750732,-13.74899959564209 -11.404000282287598,15.597999572753906 -13.489999771118164,16.190000534057617 C-14.083000183105469,16.357999801635742 12.47700023651123,16.993000030517578 13.279999732971191,16.190000534057617 C14.083000183105469,15.38700008392334 8.623000144958496,-16.145999908447266 10.067999839782715,-16.569000244140625 C11.512999534606934,-16.993000030517578 -4.545000076293945,-13.517999649047852 -4.545000076293945,-13.517999649047852z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,293.9129943847656,327.89801025390625)">
                    <path
                        fill="rgb(139,85,19)"
                        fillOpacity="1"
                        d=" M-2.8910000324249268,-10.854999542236328 C-2.8910000324249268,-10.854999542236328 -11.803000450134277,9.520000457763672 -9.715999603271484,10.805000305175781 C-7.627999782562256,12.08899974822998 11.477999687194824,12.08899974822998 11.640000343322754,11.607000350952148 C11.802000045776367,11.12600040435791 8.20199966430664,-10.946000099182129 9.71500015258789,-11.517000198364258 C11.227999687194824,-12.088000297546387 -2.8910000324249268,-10.854999542236328 -2.8910000324249268,-10.854999542236328z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,295.6789855957031,309.39599609375)">
                    <path
                        fill="rgb(158,93,13)"
                        fillOpacity="1"
                        d=" M-1.2139999866485596,-10.03600025177002 C-1.2139999866485596,-10.03600025177002 -9.875,8.597999572753906 -8.270000457763672,9.798999786376953 C-6.664000034332275,11 9.875,9.798999786376953 9.875,9.798999786376953 C9.875,9.798999786376953 7.406000137329102,-11.00100040435791 6.795000076293945,-10.678999900817871 C6.183000087738037,-10.357999801635742 -1.2139999866485596,-10.03600025177002 -1.2139999866485596,-10.03600025177002z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,298.8680114746094,291.94500732421875)">
                    <path
                        fill="rgb(100,56,9)"
                        fillOpacity="1"
                        d=" M-0.6970000267028809,-9.461000442504883 C-0.6970000267028809,-9.461000442504883 -8.727999687194824,7.804999828338623 -7.764999866485596,8.894000053405762 C-6.801000118255615,9.982999801635742 5.881999969482422,10.78600025177002 6.685999870300293,10.144000053405762 C7.491000175476074,9.501999855041504 4.644999980926514,-8.13599967956543 6.685999870300293,-9.461000442504883 C8.727999687194824,-10.78600025177002 -0.6970000267028809,-9.461000442504883 -0.6970000267028809,-9.461000442504883z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,301.5570068359375,276.9209899902344)">
                    <path
                        fill="rgb(139,85,19)"
                        fillOpacity="1"
                        d=" M2.3929998874664307,-8.430000305175781 C2.3929998874664307,-8.430000305175781 -7.723999977111816,6.2829999923706055 -5.1539998054504395,6.973999977111816 C-2.5850000381469727,7.664999961853027 6.339000225067139,9.109999656677246 5.810999870300293,8.788999557495117 C5.283999919891357,8.468000411987305 7.723999977111816,-9.109000205993652 7.370999813079834,-8.430000305175781 C7.01800012588501,-7.750999927520752 2.3929998874664307,-8.430000305175781 2.3929998874664307,-8.430000305175781z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,307.08099365234375,264.0299987792969)">
                    <path
                        fill="rgb(113,60,5)"
                        fillOpacity="1"
                        d=" M3.742000102996826,-7.708000183105469 C3.742000102996826,-7.708000183105469 -6.502999782562256,2.6570000648498535 -5.539999961853027,4.460000038146973 C-4.576000213623047,6.263000011444092 2.809999942779541,7.708000183105469 2.809999942779541,7.708000183105469 C2.809999942779541,7.708000183105469 5.788000106811523,-5.619999885559082 6.145999908447266,-5.619999885559082 C6.504000186920166,-5.619999885559082 3.742000102996826,-7.708000183105469 3.742000102996826,-7.708000183105469z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,313.2969970703125,253.00399780273438)">
                    <path
                        fill="rgb(145,81,15)"
                        fillOpacity="1"
                        d=" M2.2149999141693115,-6.797999858856201 C2.2149999141693115,-6.797999858856201 -4.336999893188477,-0.5429999828338623 -5.622000217437744,3.311000108718872 C-5.622000217437744,3.311000108718872 -2.569999933242798,5.947999954223633 0.8019999861717224,6.797999858856201 C0.8019999861717224,6.797999858856201 5.622000217437744,-4.4019999504089355 5.544000148773193,-4.435999870300293 C5.4670000076293945,-4.468999862670898 2.2149999141693115,-6.797999858856201 2.2149999141693115,-6.797999858856201z"
                    />
                </g>
                <g opacity="1" transform="matrix(1,0,0,1,322.62701416015625,241.74000549316406)">
                    <path
                        fill="rgb(98,51,8)"
                        fillOpacity="1"
                        d=" M6.89300012588501,-6.215000152587891 C5.861999988555908,-7.105000019073486 4.322999954223633,-7.078000068664551 3.250999927520752,-6.23799991607666 C0.17599999904632568,-3.828000068664551 -6.499000072479248,1.6059999465942383 -7.114999771118164,3.822999954223633 C-7.377999782562256,4.769000053405762 -6.196000099182129,5.659999847412109 -4.901000022888184,6.329999923706055 C-3.4019999504089355,7.105000019073486 -1.559000015258789,6.466000080108643 -0.875,4.922999858856201 C0.8040000200271606,1.1330000162124634 4.033999919891357,-5.4730000495910645 6.144999980926514,-5.480000019073486 C7.377999782562256,-5.485000133514404 7.3480000495910645,-5.822000026702881 6.89300012588501,-6.215000152587891z"
                    />
                </g>
            </g>
        </g>
    </svg>)
};

export default NewPalm;

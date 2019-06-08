import { Component, OnInit } from '@angular/core';
import { BrowserDatamatrixCodeReader } from '@zxing/library';
import { Result } from '@zxing/library';

@Component({
  selector: 'app-js-dmcode',
  templateUrl: './js-dmcode.component.html',
  styleUrls: ['./js-dmcode.component.scss']
})
export class JsDmcodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.addEventListener('load', () => {

      const video = document.getElementById('video');
      //const codeReaderAlpha = new BrowserDatamatrixCodeReader(img);
      const codeReaderAlpha = new BrowserDatamatrixCodeReader(0);

      console.log('ZXing code reader initialized')
      codeReaderAlpha.getVideoInputDevices()
        .then((videoInputDevices) => {
          const sourceSelect = document.getElementById('sourceSelect')
          var selectedDeviceId = videoInputDevices[0].deviceId
          if (videoInputDevices.length >= 1) {
            videoInputDevices.forEach((element) => {
              const sourceOption = document.createElement('option')
              sourceOption.text = element.label
              sourceOption.value = element.deviceId
              sourceSelect.appendChild(sourceOption)
            })

          // set selectedDeviceId = main camera of mobile devices
          if (videoInputDevices.length > 1)
            selectedDeviceId = videoInputDevices[1].deviceId

            sourceSelect.onchange = () => {
              // remove sourceSelect.value
              //selectedDeviceId = sourceSelect.value;
            };

            const sourceSelectPanel = document.getElementById('sourceSelectPanel')
            sourceSelectPanel.style.display = 'block'
          }

          //remove decodeFromInputVideoDevice
          try {
              //try recasting video
              const result = codeReaderAlpha.decodeFromInputVideoDevice(selectedDeviceId, 'video').then((result) => {
              // const result = codeReaderAlpha.startDecodeFromStream(video);
              console.log(result)

              //using result.getText() instead of calling result.text
              new Result(result.getText(),result.getRawBytes(),result.getNumBits(),result.getResultPoints(),result.getBarcodeFormat(),result.getTimestamp());
              //document.getElementById('result').textContent = result.text
              document.getElementById('result').textContent = result.getText();
            }).catch((err) => {
              console.error(err)
              document.getElementById('result').textContent = err
            });
          } catch (err) {
            console.error(err);
          }

          // remove debug message result
          //console.log(result);
        })
        .catch((err) => {
          console.error(err)
        });
    });
  }

}

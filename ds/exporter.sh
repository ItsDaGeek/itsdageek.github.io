#!/bin/bash

wget https://dageek.tech/ds/node_exporter
cp node_exporter /usr/local/bin/node_exporter
rm node_exporter
wget https://dageek.tech/ds/node_exporter.service
cp node_exporter.service /etc/systemd/system/node_exporter.service
rm node_exporter.service

systemctl daemon-reload
systemctl enable node_exporter.service
systemctl start node_exporter.service
echo "DONE"
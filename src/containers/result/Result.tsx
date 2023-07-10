/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useRef, useState } from 'react';
import WebViewer from '@pdftron/webviewer';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getWeightLoss, getBMI, getReducedWages, getCurrentDatePlus7Days, checkBMI } from '../../utils/utils';

const Result: FC = () => {
  const { internalMedicineDetail } = useAppSelector((state) => state.internalMedicine.info);
  const viewer = useRef<any>(null);
  const pathFile = '/result.pdf';
  let checkWeightLoss = 0;
  let bmi = 0;
  let reducedWages = 0;
  let checkPathological = 0;
  const dateCurrent = new Date();

  if (internalMedicineDetail) {
    checkPathological = internalMedicineDetail.pathological;
    reducedWages = getReducedWages(internalMedicineDetail.reducedWages);
    checkWeightLoss = getWeightLoss(internalMedicineDetail?.weight, internalMedicineDetail?.weightMonthAgo);
    bmi = getBMI(internalMedicineDetail?.weight, internalMedicineDetail?.height);
  }

  useEffect(() => {
    if (viewer.current) {
      WebViewer(
        {
          path: '/lib',
          licenseKey: 'demo:1688606828038:7c6a6bd1030000000026bb0e01b0f4eec1980fce336703543469014721',
          initialDoc: pathFile,
        },
        viewer.current as HTMLDivElement
      ).then((instance) => {
        viewer.current = instance;
        const { documentViewer, annotationManager, Annotations } = instance.Core;

        if (internalMedicineDetail) {
          documentViewer.addEventListener('documentLoaded', () => {
            // Họ tên bệnh nhân
            const textName = new Annotations.FreeTextAnnotation();
            textName.PageNumber = 1;
            textName.X = 150;
            textName.Y = 64;
            textName.Width = 120;
            textName.Height = 18;
            textName.FontSize = '12';
            textName.setContents(internalMedicineDetail?.name ?? 'Nguyễn Văn A');
            textName.StrokeColor = new Annotations.Color(255, 255, 255);
            textName.TextColor = new Annotations.Color(0, 0, 0);

            // Chẩn đoán
            const textDiagnostic = new Annotations.FreeTextAnnotation();
            textDiagnostic.PageNumber = 1;
            textDiagnostic.X = 150;
            textDiagnostic.Y = 82;
            textDiagnostic.Width = 80;
            textDiagnostic.Height = 18;
            textDiagnostic.FontSize = '12';
            textDiagnostic.setContents(internalMedicineDetail?.diagnostic ?? 'Suy Gan');
            textDiagnostic.StrokeColor = new Annotations.Color(255, 255, 255);
            textDiagnostic.TextColor = new Annotations.Color(0, 0, 0);

            // Năm sinh
            const textBirthDay = new Annotations.FreeTextAnnotation();
            textBirthDay.PageNumber = 1;
            textBirthDay.X = 482;
            textBirthDay.Y = 66;
            textBirthDay.Width = 30;
            textBirthDay.Height = 18;
            textBirthDay.FontSize = '12';
            textBirthDay.setContents(internalMedicineDetail?.year ?? '2001');
            textBirthDay.StrokeColor = new Annotations.Color(255, 255, 255);
            textBirthDay.TextColor = new Annotations.Color(0, 0, 0);

            // Giới tính
            const textGender = new Annotations.FreeTextAnnotation();
            textGender.PageNumber = 1;
            textGender.X = 482;
            textGender.Y = 82;
            textGender.Width = 30;
            textGender.Height = 18;
            textGender.FontSize = '12';
            textGender.setContents(internalMedicineDetail?.gender ?? 'Nam');
            textGender.StrokeColor = new Annotations.Color(255, 255, 255);
            textGender.TextColor = new Annotations.Color(0, 0, 0);

            // cân nặng vào viện
            const textWeight = new Annotations.FreeTextAnnotation();
            textWeight.PageNumber = 1;
            textWeight.X = 202;
            textWeight.Y = 98;
            textWeight.Width = 22;
            textWeight.Height = 14;
            textWeight.FontSize = '12';
            textWeight.setContents(internalMedicineDetail?.weight + '' ?? '50');
            textWeight.StrokeColor = new Annotations.Color(255, 255, 255);
            textWeight.TextColor = new Annotations.Color(0, 0, 0);

            // Chiều cao
            const textHeight = new Annotations.FreeTextAnnotation();
            textHeight.PageNumber = 1;
            textHeight.X = 202;
            textHeight.Y = 114;
            textHeight.Width = 22;
            textHeight.Height = 14;
            textHeight.FontSize = '12';
            textHeight.setContents(internalMedicineDetail?.height + '' ?? '167');
            textHeight.StrokeColor = new Annotations.Color(255, 255, 255);
            textHeight.TextColor = new Annotations.Color(0, 0, 0);

            // Cân nặng bệnh nhân trước 1 tháng
            const textWeightAgo = new Annotations.FreeTextAnnotation();
            textWeightAgo.PageNumber = 1;
            textWeightAgo.X = 202;
            textWeightAgo.Y = 128;
            textWeightAgo.Width = 22;
            textWeightAgo.Height = 14;
            textWeightAgo.FontSize = '12';
            textWeightAgo.setContents(internalMedicineDetail?.weightMonthAgo + '' ?? '50');
            textWeightAgo.StrokeColor = new Annotations.Color(255, 255, 255);
            textWeightAgo.TextColor = new Annotations.Color(0, 0, 0);

            // Lượng ăn giảm trong tuần qua
            const textReducedWages = new Annotations.FreeTextAnnotation();
            textReducedWages.PageNumber = 1;
            textReducedWages.X = 202;
            textReducedWages.Y = 145;
            textReducedWages.Width = 22;
            textReducedWages.Height = 14;
            textReducedWages.FontSize = '12';
            textReducedWages.setContents(internalMedicineDetail?.reducedWages + '' ?? '0');
            textReducedWages.StrokeColor = new Annotations.Color(255, 255, 255);
            textReducedWages.TextColor = new Annotations.Color(0, 0, 0);

            // Chỉ số BMI
            const textBMI = new Annotations.FreeTextAnnotation();
            textBMI.PageNumber = 1;
            textBMI.X = 510;
            textBMI.Y = 145;
            textBMI.Width = 35;
            textBMI.Height = 14;
            textBMI.FontSize = '12';
            textBMI.setContents(bmi.toFixed(3));
            textBMI.StrokeColor = new Annotations.Color(255, 255, 255);
            textBMI.TextColor = new Annotations.Color(0, 0, 0);

            //** check BMI */
            const textBMI1 = new Annotations.FreeTextAnnotation();
            const textBMI2 = new Annotations.FreeTextAnnotation();
            if (bmi < 20.5) {
              textBMI2.PageNumber = 1;
              textBMI2.X = 503;
              textBMI2.Y = 198;
              textBMI2.Width = 22;
              textBMI2.Height = 14;
              textBMI2.FontSize = '12';
              textBMI2.setContents('X');
              textBMI2.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              textBMI2.TextColor = new Annotations.Color(0, 0, 0);
            } else {
              textBMI1.PageNumber = 1;
              textBMI1.X = 411;
              textBMI1.Y = 198;
              textBMI1.Width = 22;
              textBMI1.Height = 14;
              textBMI1.FontSize = '12';
              textBMI1.setContents('X');
              textBMI1.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              textBMI1.TextColor = new Annotations.Color(0, 0, 0);
            }

            //** check sụt cân trong 1 tháng */
            const checkWeight1 = new Annotations.FreeTextAnnotation();
            const checkWeight2 = new Annotations.FreeTextAnnotation();

            if (checkWeightLoss !== 0) {
              checkWeight1.PageNumber = 1;
              checkWeight1.X = 503;
              checkWeight1.Y = 216;
              checkWeight1.Width = 22;
              checkWeight1.Height = 14;
              checkWeight1.FontSize = '12';
              checkWeight1.setContents('X');
              checkWeight1.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              checkWeight1.TextColor = new Annotations.Color(0, 0, 0);
            } else {
              checkWeight2.PageNumber = 1;
              checkWeight2.X = 411;
              checkWeight2.Y = 216;
              checkWeight2.Width = 22;
              checkWeight2.Height = 14;
              checkWeight2.FontSize = '12';
              checkWeight2.setContents('X');
              checkWeight2.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              checkWeight2.TextColor = new Annotations.Color(0, 0, 0);
            }

            //** check lượng ăn sụt giảm trong tuần qua */
            const checkReducedWages1 = new Annotations.FreeTextAnnotation();
            const checkReducedWages2 = new Annotations.FreeTextAnnotation();

            if (reducedWages !== 0) {
              checkReducedWages1.PageNumber = 1;
              checkReducedWages1.X = 503;
              checkReducedWages1.Y = 232;
              checkReducedWages1.Width = 22;
              checkReducedWages1.Height = 14;
              checkReducedWages1.FontSize = '12';
              checkReducedWages1.setContents('X');
              checkReducedWages1.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              checkReducedWages1.TextColor = new Annotations.Color(0, 0, 0);
            } else {
              checkReducedWages2.PageNumber = 1;
              checkReducedWages2.X = 411;
              checkReducedWages2.Y = 232;
              checkReducedWages2.Width = 22;
              checkReducedWages2.Height = 14;
              checkReducedWages2.FontSize = '12';
              checkReducedWages2.setContents('X');
              checkReducedWages2.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              checkReducedWages2.TextColor = new Annotations.Color(0, 0, 0);
            }

            //** check bệnh nặng hạn chế đi lại */
            const checkBN1 = new Annotations.FreeTextAnnotation();
            const checkBN2 = new Annotations.FreeTextAnnotation();
            if (internalMedicineDetail.travelRestrictions === 1) {
              checkBN1.PageNumber = 1;
              checkBN1.X = 503;
              checkBN1.Y = 248;
              checkBN1.Width = 22;
              checkBN1.Height = 14;
              checkBN1.FontSize = '12';
              checkBN1.setContents('X');
              checkBN1.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              checkBN1.TextColor = new Annotations.Color(0, 0, 0);
            } else {
              checkBN2.PageNumber = 1;
              checkBN2.X = 411;
              checkBN2.Y = 248;
              checkBN2.Width = 22;
              checkBN2.Height = 14;
              checkBN2.FontSize = '12';
              checkBN2.setContents('X');
              checkBN2.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              checkBN2.TextColor = new Annotations.Color(0, 0, 0);
            }

            //TODO: check điền kiện để hiển thị cho hợp lý
            //** kết quả */
            const result1 = new Annotations.FreeTextAnnotation();
            const result2 = new Annotations.FreeTextAnnotation();

            if (
              bmi < 20.5 ||
              reducedWages !== 0 ||
              checkWeightLoss !== 0 ||
              internalMedicineDetail.travelRestrictions === 1
            ) {
              result1.PageNumber = 1;
              result1.X = 503;
              result1.Y = 270;
              result1.Width = 22;
              result1.Height = 14;
              result1.FontSize = '12';
              result1.setContents('X');
              result1.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              result1.TextColor = new Annotations.Color(0, 0, 0);
            } else {
              result2.PageNumber = 1;
              result2.X = 411;
              result2.Y = 270;
              result2.Width = 22;
              result2.Height = 14;
              result2.FontSize = '12';
              result2.setContents('X');
              result2.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              result2.TextColor = new Annotations.Color(0, 0, 0);
            }

            //TODO: check điền kiện để hiển thị cho hợp lý
            //** chỉ định */
            const point1 = new Annotations.FreeTextAnnotation();
            const point2 = new Annotations.FreeTextAnnotation();
            if (true) {
              point1.PageNumber = 1;
              point1.X = 503;
              point1.Y = 293;
              point1.Width = 22;
              point1.Height = 14;
              point1.FontSize = '12';
              point1.setContents('X');
              point1.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              point1.TextColor = new Annotations.Color(0, 0, 0);
            } else {
              point2.PageNumber = 1;
              point2.X = 411;
              point2.Y = 293;
              point2.Width = 22;
              point2.Height = 14;
              point2.FontSize = '12';
              point2.setContents('X');
              point2.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              point2.TextColor = new Annotations.Color(0, 0, 0);
            }

            //** chỉ số khối cơ thể BMI */
            const pointBMI0 = new Annotations.FreeTextAnnotation();
            const pointBMI1 = new Annotations.FreeTextAnnotation();
            const pointBMI2 = new Annotations.FreeTextAnnotation();
            if (bmi >= 20.5) {
              pointBMI0.PageNumber = 1;
              pointBMI0.X = 465.5;
              pointBMI0.Y = 360;
              pointBMI0.Width = 22;
              pointBMI0.Height = 14;
              pointBMI0.FontSize = '12';
              pointBMI0.setContents('x');
              pointBMI0.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              pointBMI0.TextColor = new Annotations.Color(0, 0, 0);
            } else if (bmi < 20.5 && bmi >= 18.5) {
              pointBMI1.PageNumber = 1;
              pointBMI1.X = 465.5;
              pointBMI1.Y = 377;
              pointBMI1.Width = 22;
              pointBMI1.Height = 14;
              pointBMI1.FontSize = '12';
              pointBMI1.setContents('x');
              pointBMI1.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              pointBMI1.TextColor = new Annotations.Color(0, 0, 0);
            } else {
              pointBMI2.PageNumber = 1;
              pointBMI2.X = 465.5;
              pointBMI2.Y = 391;
              pointBMI2.Width = 22;
              pointBMI2.Height = 14;
              pointBMI2.FontSize = '12';
              pointBMI2.setContents('x');
              pointBMI2.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              pointBMI2.TextColor = new Annotations.Color(0, 0, 0);
            }

            //TODO: check điền kiện để hiển thị cho hợp lý
            //** sụt cân */
            const weightLoss0 = new Annotations.FreeTextAnnotation();
            const weightLoss1 = new Annotations.FreeTextAnnotation();
            const weightLoss2 = new Annotations.FreeTextAnnotation();
            if (checkWeightLoss === 0) {
              weightLoss0.PageNumber = 1;
              weightLoss0.X = 465.5;
              weightLoss0.Y = 408;
              weightLoss0.Width = 22;
              weightLoss0.Height = 14;
              weightLoss0.FontSize = '12';
              weightLoss0.setContents('x');
              weightLoss0.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              weightLoss0.TextColor = new Annotations.Color(0, 0, 0);
            } else if (checkWeightLoss === 1) {
              weightLoss1.PageNumber = 1;
              weightLoss1.X = 465.5;
              weightLoss1.Y = 424;
              weightLoss1.Width = 22;
              weightLoss1.Height = 14;
              weightLoss1.FontSize = '12';
              weightLoss1.setContents('x');
              weightLoss1.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              weightLoss1.TextColor = new Annotations.Color(0, 0, 0);
            } else {
              weightLoss2.PageNumber = 1;
              weightLoss2.X = 465.5;
              weightLoss2.Y = 440;
              weightLoss2.Width = 22;
              weightLoss2.Height = 14;
              weightLoss2.FontSize = '12';
              weightLoss2.setContents('x');
              weightLoss2.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              weightLoss2.TextColor = new Annotations.Color(0, 0, 0);
            }

            //** lượng ăn */
            const amountOfFood0 = new Annotations.FreeTextAnnotation();
            const amountOfFood1 = new Annotations.FreeTextAnnotation();
            const amountOfFood2 = new Annotations.FreeTextAnnotation();
            if (reducedWages === 0) {
              amountOfFood0.PageNumber = 1;
              amountOfFood0.X = 465.5;
              amountOfFood0.Y = 453;
              amountOfFood0.Width = 22;
              amountOfFood0.Height = 14;
              amountOfFood0.FontSize = '12';
              amountOfFood0.setContents('x');
              amountOfFood0.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              amountOfFood0.TextColor = new Annotations.Color(0, 0, 0);
            } else if (reducedWages === 1) {
              amountOfFood1.PageNumber = 1;
              amountOfFood1.X = 465.5;
              amountOfFood1.Y = 470;
              amountOfFood1.Width = 22;
              amountOfFood1.Height = 14;
              amountOfFood1.FontSize = '12';
              amountOfFood1.setContents('x');
              amountOfFood1.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              amountOfFood1.TextColor = new Annotations.Color(0, 0, 0);
            } else {
              amountOfFood2.PageNumber = 1;
              amountOfFood2.X = 465.5;
              amountOfFood2.Y = 485;
              amountOfFood2.Width = 22;
              amountOfFood2.Height = 14;
              amountOfFood2.FontSize = '12';
              amountOfFood2.setContents('x');
              amountOfFood2.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              amountOfFood2.TextColor = new Annotations.Color(0, 0, 0);
            }

            //** bệnh lý */
            const pathological0 = new Annotations.FreeTextAnnotation();
            const pathological1 = new Annotations.FreeTextAnnotation();
            const pathological2 = new Annotations.FreeTextAnnotation();
            if (checkPathological === 0) {
              pathological0.PageNumber = 1;
              pathological0.X = 465.5;
              pathological0.Y = 500;
              pathological0.Width = 22;
              pathological0.Height = 14;
              pathological0.FontSize = '12';
              pathological0.setContents('x');
              pathological0.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              pathological0.TextColor = new Annotations.Color(0, 0, 0);
            } else if (checkPathological === 1) {
              pathological1.PageNumber = 1;
              pathological1.X = 465.5;
              pathological1.Y = 516;
              pathological1.Width = 22;
              pathological1.Height = 14;
              pathological1.FontSize = '12';
              pathological1.setContents('x');
              pathological1.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              pathological1.TextColor = new Annotations.Color(0, 0, 0);
            } else {
              pathological2.PageNumber = 1;
              pathological2.X = 465.5;
              pathological2.Y = 531;
              pathological2.Width = 22;
              pathological2.Height = 14;
              pathological2.FontSize = '12';
              pathological2.setContents('x');
              pathological2.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              pathological2.TextColor = new Annotations.Color(0, 0, 0);
            }

            //** kết luận */
            const conclude1 = new Annotations.FreeTextAnnotation();
            const conclude2 = new Annotations.FreeTextAnnotation();
            if (checkPathological + reducedWages + checkWeightLoss + checkBMI(bmi) < 2) {
              conclude1.PageNumber = 1;
              conclude1.X = 465.5;
              conclude1.Y = 548.5;
              conclude1.Width = 22;
              conclude1.Height = 14;
              conclude1.FontSize = '12';
              conclude1.setContents('x');
              conclude1.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              conclude1.TextColor = new Annotations.Color(0, 0, 0);
            } else {
              conclude2.PageNumber = 1;
              conclude2.X = 465.5;
              conclude2.Y = 572;
              conclude2.Width = 22;
              conclude2.Height = 14;
              conclude2.FontSize = '12';
              conclude2.setContents('x');
              conclude2.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              conclude2.TextColor = new Annotations.Color(0, 0, 0);
            }

            //** chỉ định chế độ ăn và đường nuôi ăn */
            const dietCode = new Annotations.FreeTextAnnotation();
            const feedingSugar1 = new Annotations.FreeTextAnnotation();
            const feedingSugar2 = new Annotations.FreeTextAnnotation();
            const feedingSugar3 = new Annotations.FreeTextAnnotation();
            dietCode.PageNumber = 1;
            dietCode.X = 480;
            dietCode.Y = 612;
            dietCode.Width = 70;
            dietCode.Height = 18;
            dietCode.FontSize = '12';
            dietCode.setContents(internalMedicineDetail.dietCode + '-' + internalMedicineDetail.foodOption);
            dietCode.StrokeColor = new Annotations.Color(255, 255, 255, 0);
            dietCode.TextColor = new Annotations.Color(0, 0, 0);
            if (internalMedicineDetail.feedingSugar === 0) {
              feedingSugar1.PageNumber = 1;
              feedingSugar1.X = 500;
              feedingSugar1.Y = 627;
              feedingSugar1.Width = 22;
              feedingSugar1.Height = 14;
              feedingSugar1.FontSize = '12';
              feedingSugar1.setContents('x');
              feedingSugar1.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              feedingSugar1.TextColor = new Annotations.Color(0, 0, 0);
            } else if (internalMedicineDetail.feedingSugar === 1) {
              feedingSugar2.PageNumber = 1;
              feedingSugar2.X = 500;
              feedingSugar2.Y = 642;
              feedingSugar2.Width = 22;
              feedingSugar2.Height = 14;
              feedingSugar2.FontSize = '12';
              feedingSugar2.setContents('x');
              feedingSugar2.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              feedingSugar2.TextColor = new Annotations.Color(0, 0, 0);
            } else {
              feedingSugar3.PageNumber = 1;
              feedingSugar3.X = 500;
              feedingSugar3.Y = 658;
              feedingSugar3.Width = 22;
              feedingSugar3.Height = 14;
              feedingSugar3.FontSize = '12';
              feedingSugar3.setContents('x');
              feedingSugar3.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              feedingSugar3.TextColor = new Annotations.Color(0, 0, 0);
            }

            //** tái đánh giá */
            const reEvaluate1 = new Annotations.FreeTextAnnotation();
            const reEvaluate2 = new Annotations.FreeTextAnnotation();
            const reEvaluateDate = new Annotations.FreeTextAnnotation();

            if (checkWeightLoss + reducedWages + checkBMI(bmi) + internalMedicineDetail.pathological < 2) {
              reEvaluate1.PageNumber = 1;
              reEvaluate1.X = 500;
              reEvaluate1.Y = 676;
              reEvaluate1.Width = 22;
              reEvaluate1.Height = 14;
              reEvaluate1.FontSize = '12';
              reEvaluate1.setContents('x');
              reEvaluate1.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              reEvaluate1.TextColor = new Annotations.Color(0, 0, 0);
            } else {
              reEvaluate2.PageNumber = 1;
              reEvaluate2.X = 500;
              reEvaluate2.Y = 690;
              reEvaluate2.Width = 22;
              reEvaluate2.Height = 14;
              reEvaluate2.FontSize = '12';
              reEvaluate2.setContents('x');
              reEvaluate2.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              reEvaluate2.TextColor = new Annotations.Color(0, 0, 0);
            }

            reEvaluateDate.PageNumber = 1;
            reEvaluateDate.X = 484;
            reEvaluateDate.Y = 705;
            reEvaluateDate.Width = 60;
            reEvaluateDate.Height = 18;
            reEvaluateDate.FontSize = '12';
            reEvaluateDate.setContents(getCurrentDatePlus7Days());
            reEvaluateDate.StrokeColor = new Annotations.Color(255, 255, 255, 0);
            reEvaluateDate.TextColor = new Annotations.Color(0, 0, 0);

            // ** mời hội chẩn đoán*/
            const inviteConsultationY = new Annotations.FreeTextAnnotation();
            const inviteConsultationN = new Annotations.FreeTextAnnotation();
            if (internalMedicineDetail.nutritionConsultation) {
              inviteConsultationY.PageNumber = 1;
              inviteConsultationY.X = 500;
              inviteConsultationY.Y = 720.5;
              inviteConsultationY.Width = 22;
              inviteConsultationY.Height = 14;
              inviteConsultationY.FontSize = '12';
              inviteConsultationY.setContents('x');
              inviteConsultationY.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              inviteConsultationY.TextColor = new Annotations.Color(0, 0, 0);
            } else {
              inviteConsultationN.PageNumber = 1;
              inviteConsultationN.X = 500;
              inviteConsultationN.Y = 735.5;
              inviteConsultationN.Width = 22;
              inviteConsultationN.Height = 14;
              inviteConsultationN.FontSize = '12';
              inviteConsultationN.setContents('x');
              inviteConsultationN.StrokeColor = new Annotations.Color(255, 255, 255, 0);
              inviteConsultationN.TextColor = new Annotations.Color(0, 0, 0);
            }

            //** Ngày */
            const day = new Annotations.FreeTextAnnotation();
            day.PageNumber = 1;
            day.X = 370;
            day.Y = 790;
            day.Width = 200;
            day.Height = 18;
            day.FontSize = '12';
            day.TextAlign = 'center';
            day.setContents('hue');
            day.StrokeColor = new Annotations.Color(255, 255, 255, 0);
            day.TextColor = new Annotations.Color(0, 0, 0);

            //** Tháng */
            const month = new Annotations.FreeTextAnnotation();
            month.PageNumber = 1;
            month.X = 382;
            month.Y = 820;
            month.Width = 200;
            month.Height = 18;
            month.FontSize = '12';
            month.TextAlign = 'center';
            month.setContents('hue');
            month.StrokeColor = new Annotations.Color(255, 255, 255, 0);
            month.TextColor = new Annotations.Color(0, 0, 0);

            //** Năm */
            const year = new Annotations.FreeTextAnnotation();
            year.PageNumber = 1;
            year.X = 382;
            year.Y = 820;
            year.Width = 200;
            year.Height = 18;
            year.FontSize = '12';
            year.TextAlign = 'center';
            year.setContents('hue');
            year.StrokeColor = new Annotations.Color(255, 255, 255, 0);
            year.TextColor = new Annotations.Color(0, 0, 0);

            //** tên bác sĩ */
            const doctorName = new Annotations.FreeTextAnnotation();
            doctorName.PageNumber = 1;
            doctorName.X = 382;
            doctorName.Y = 820;
            doctorName.Width = 200;
            doctorName.Height = 18;
            doctorName.FontSize = '12';
            doctorName.TextAlign = 'center';
            doctorName.setContents(internalMedicineDetail.doctorName);
            doctorName.StrokeColor = new Annotations.Color(255, 255, 255, 0);
            doctorName.TextColor = new Annotations.Color(0, 0, 0);

            annotationManager.addAnnotation(textName);

            annotationManager.addAnnotation(textDiagnostic);

            annotationManager.addAnnotation(textHeight);

            annotationManager.addAnnotation(textWeight);

            annotationManager.addAnnotation(textWeightAgo);

            annotationManager.addAnnotation(textReducedWages);

            annotationManager.addAnnotation(textGender);

            annotationManager.addAnnotation(textBirthDay);

            annotationManager.addAnnotation(textBMI);

            annotationManager.addAnnotation(textBMI1);

            annotationManager.addAnnotation(textBMI2);

            annotationManager.addAnnotation(checkWeight1);

            annotationManager.addAnnotation(checkWeight2);

            annotationManager.addAnnotation(checkBN1);

            annotationManager.addAnnotation(checkBN2);

            annotationManager.addAnnotation(checkReducedWages1);

            annotationManager.addAnnotation(checkReducedWages2);

            annotationManager.addAnnotation(result1);

            annotationManager.addAnnotation(result2);

            annotationManager.addAnnotation(point1);

            annotationManager.addAnnotation(point2);

            annotationManager.addAnnotation(pointBMI0);
            annotationManager.addAnnotation(pointBMI1);
            annotationManager.addAnnotation(pointBMI2);

            annotationManager.addAnnotation(weightLoss0);
            annotationManager.addAnnotation(weightLoss1);
            annotationManager.addAnnotation(weightLoss2);

            annotationManager.addAnnotation(amountOfFood0);
            annotationManager.addAnnotation(amountOfFood1);
            annotationManager.addAnnotation(amountOfFood2);

            annotationManager.addAnnotation(pathological0);
            annotationManager.addAnnotation(pathological1);
            annotationManager.addAnnotation(pathological2);

            annotationManager.addAnnotation(conclude1);
            annotationManager.addAnnotation(conclude2);

            annotationManager.addAnnotation(dietCode);
            annotationManager.addAnnotation(feedingSugar1);
            annotationManager.addAnnotation(feedingSugar2);
            annotationManager.addAnnotation(feedingSugar3);

            annotationManager.addAnnotation(reEvaluate1);
            annotationManager.addAnnotation(reEvaluate2);
            annotationManager.addAnnotation(reEvaluateDate);

            annotationManager.addAnnotation(inviteConsultationY);
            annotationManager.addAnnotation(inviteConsultationN);

            annotationManager.addAnnotation(day);
            annotationManager.addAnnotation(month);
            annotationManager.addAnnotation(year);

            annotationManager.addAnnotation(doctorName);
          });
        }
      });
    }
  }, [bmi, checkPathological, checkWeightLoss, internalMedicineDetail, reducedWages]);

  return (
    <div className='MyComponent'>
      {/* <div className='header'>React sample</div> */}
      <div className='webviewer' ref={viewer} style={{ height: '100vh' }}></div>
    </div>
  );
};

export default Result;
